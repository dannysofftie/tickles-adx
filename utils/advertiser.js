"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities = require("../includes");
/**
 * authenticate advertiser to allow login and access dashboard
 * @param req client request
 */
async function advertiserLogin(req) {
    let result = await utilities.request({ captchaValue: req.body['g-recaptcha-response'], ip: req.ip, username: req.body.username, password: req.body.password }, '/advertiser/login');
    // check returned data by server and respond to client
    console.log(result);
    return result;
}
exports.advertiserLogin = advertiserLogin;
async function advertiserSignUp(req) {
}
exports.advertiserSignUp = advertiserSignUp;
