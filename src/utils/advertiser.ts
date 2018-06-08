import * as https from 'https'
import { Request } from 'express'
import { HttpRequest } from '../includes'
import * as qs from 'querystring'

async function verifyCaptcha(captcha: string, ip: string): Promise<{} | Array<string>> {
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
    return await verifyCaptcha(req.body['g-recaptcha-response'], req.ip).then(async (data) => {
        if (!!JSON.parse(data.toString()).success) {
            const path = '/advertiser/login',
                data = {
                    username: req.body.username,
                    password: req.body.password
                }
            return await new HttpRequest().request(path, data).catch(console.error)
        }
        return { error: 'captcha_error' }
    }).catch(error => JSON.stringify({ error: error.errno }))
}

export async function advertiserSignUp(req: Request) {

}
