import * as https from 'https'
import { Request } from 'express'
import { HttpRequest } from '../includes'
import * as qs from 'querystring'

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

export async function advertiserLogin(req: Request) {
    const path = '/advertiser/login',
        data = {
            username: req.body.username,
            password: req.body.password
        }
    return await new HttpRequest().request(path, data).catch(err => err.code ? { code: err.code } : err)
}

export async function advertiserSignUp(req: Request) {

}
