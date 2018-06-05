
import { Request } from 'express'
import * as inc from '../includes'
/**
 * authenticate advertiser to allow login and access dashboard
 * @param req client request 
 */
export async function advertiserLogin(req: Request) {
    let result = await inc.request({ captchaValue: req.body['g-recaptcha-response'], ip: req.ip, username: req.body.username, password: req.body.password }, '/advertiser/login').catch(console.error)

    // check returned data by server and respond to client
    console.log(result)
    return result
}

export async function advertiserSignUp(req: Request) {

}
