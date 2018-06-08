"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const https = require("https");
const includes_1 = require("../includes");
const qs = require("querystring");
async function verifyCaptcha(captcha, ip) {
    return new Promise((resolve, reject) => {
        let req = https.request({
            method: 'POST',
            host: 'www.google.com',
            path: '/recaptcha/api/siteverify',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }, (res) => {
            res.on('data', data => resolve(data));
            res.on('error', error => reject(error));
        });
        req.write(qs.stringify({ secret: '6LdN1FEUAAAAAGHokcf3kHwvrWrfJ5hZfCGtDwE2', response: captcha, remoteip: ip }));
        req.on('error', error => reject(error));
        req.end();
    });
}
async function advertiserLogin(req) {
    return await verifyCaptcha(req.body['g-recaptcha-response'], req.ip).then(async (data) => {
        if (!!JSON.parse(data.toString()).success) {
            const path = '/advertiser/login', data = {
                username: req.body.username,
                password: req.body.password
            };
            return await new includes_1.HttpRequest().request(path, data).catch(console.error);
        }
        return { error: 'captcha_error' };
    }).catch(error => JSON.stringify({ error: error.errno }));
}
exports.advertiserLogin = advertiserLogin;
async function advertiserSignUp(req) {
}
exports.advertiserSignUp = advertiserSignUp;
