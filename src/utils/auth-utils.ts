import * as https from 'https'
import * as qs from 'querystring'

import * as bcrypt from 'bcrypt'
import { Request, Response } from 'express'
import Advertiser from '../models/Advertiser'
import { sendMail } from '../utils/send-email'
import { Types } from 'mongoose'
import Publishers from '../models/Publisher'

const apiServerUrl: string = process.env.NODE_ENV === 'production' ? 'adxserver.herokuapp.com' : '127.0.0.1:5000'

export async function verifyCaptcha(captcha: string, ip: string): Promise<{} | Array<string>> {
    return new Promise((resolve, reject) => {
        let req = https.request({
            method: 'POST',
            host: 'www.google.com',
            path: '/recaptcha/api/siteverify',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }, (res) => {
            res.on('data', data => resolve(data))
            res.on('error', error => reject(error))
        })
        req.write(qs.stringify({ secret: '6LdN1FEUAAAAAGHokcf3kHwvrWrfJ5hZfCGtDwE2', response: captcha, remoteip: ip }))
        req.on('error', error => reject(error))
        req.end()
    })
}

export async function advertiserLogin(req: Request, res: Response) {
    let captcha = await verifyCaptcha(req.body['g-recaptcha-response'], req.ip).catch(e => e)
    try {
        if (JSON.parse(captcha.toString()).success != true) {
            return res.status(500).json({ error: 'captcha_error' })
        }
    } catch (e) {
        return res.status(500).json({ error: 'captcha_error' })
    }

    let clientData = await Advertiser.find({ emailAddress: req.body['username'] }).select('password ssid').exec()
    if (clientData.length < 1)
        return res.status(res.statusCode).json({ error: 'NOT_FOUND' })

    if (!bcrypt.compareSync(req.body['password'], clientData[0]['password']))
        return res.status(res.statusCode).json({ error: 'WRONG_PASS' })

    res.cookie('SSID', clientData[0]['ssid'], { path: '/', maxAge: 1000 * 60 * 60 * 24 })
    res.cookie('API', apiServerUrl, { path: '/', maxAge: 1000 * 60 * 60 * 24 })
    return res.status(res.statusCode).json({ message: 'success' })
}

export async function advertiserSignUp(req: Request, res: Response) {
    let captcha = await verifyCaptcha(req.body['g-recaptcha-response'], req.ip).catch(e => e)
    try {
        if (JSON.parse(captcha.toString()).success != true) {
            return res.status(500).json({ error: 'captcha_error' })
        }
    } catch (e) {
        return res.status(500).json({ error: 'captcha_error' })
    }


    let SSID = Buffer.from(req.body['emailaddress'] + ':' + req.body['fullnames']).toString('base64'),
        hashPassword = await bcrypt.hashSync(req.body['password'], 8),
        verificationCode = (Number(new Date()) % 7e9).toString(29).toUpperCase(),
        advertiser = new Advertiser({
            _id: new Types.ObjectId(),
            fullNames: req.body['fullnames'],
            emailAddress: req.body['emailaddress'],
            password: hashPassword,
            ssid: SSID,
            joinedAs: req.body['businesstarget'],
            verificationCode: verificationCode,
            businessGroupTarget: req.body['businessgrouptarget']
        }),
        emailCheck = await Advertiser.find({ emailAddress: req.body['emailaddress'] }).select('emailaddress').exec()

    if (emailCheck.length > 0)
        return res.status(res.statusCode).json({ error: 'EMAIL_EXISTS' })

    let saveResult = await advertiser.save().then(data => data['emailAddress'] == req.body['emailaddress']),
        emailStatus = await sendMail(req.body['emailaddress'], `Verify your account using code: ${verificationCode}`)

    return res.status(res.statusCode).json({ signupStatus: saveResult, emailStatus: emailStatus })
}


export async function publisherSignUp(req: Request, res: Response) {
    let SSID = Buffer.from(req.body['publisherEmail'] + ':' + req.body['publisherWebsite']).toString('base64'),
        hashPassword = await bcrypt.hashSync(req.body['publisherPassword'], 8),
        publisher = new Publishers({
            _id: new Types.ObjectId(),
            publisherEmail: req.body['publisherEmail'],
            publisherAppUrl: req.body['publisherWebsite'],
            publisherPassword: hashPassword,
            publisherDefaultWallet: null,
            publisherSsid: SSID
        }),
        emailCheck = await Publishers.find({ publisherEmail: req.body['publisherEmail'] }).select('publisherEmail').exec()
    if (emailCheck.length > 0)
        return res.status(res.statusCode).json({ signupStatus: false })

    let saveResult = await publisher.save().then(data => data['publisherEmail'] == req.body['publisherEmail'])
    return res.status(res.statusCode).json({ signupStatus: saveResult })
}

export async function publisherSignIn(req: Request, res: Response) {
    // check whether their app url is verified
    let publisherData = await Publishers.find({ publisherEmail: req.body['publisherEmail'] }).select('publisherPassword publisherSsid -_id').exec()

    if (!bcrypt.compareSync(req.body['publisherPassword'], publisherData[0]['publisherPassword']))
        return res.status(res.statusCode).json({ loginStatus: false })

    res.cookie('PUBSSID', publisherData[0]['publisherSsid'], { path: '/publisher', maxAge: 1000 * 60 * 60 * 24 })
    res.cookie('API', apiServerUrl, { path: '/publisher', maxAge: 1000 * 60 * 60 * 24 })
    return res.status(res.statusCode).json({ loginStatus: true })
}