"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const https = require("https");
const _1 = require("./");
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
exports.verifyCaptcha = verifyCaptcha;
async function advertiserLogin(req) {
    const path = '/advertiser/login', data = {
        username: req.body.username,
        password: req.body.password
    };
    return await new _1.HttpRequest().post(path, data).catch(err => err.code ? { code: err.code } : err);
}
exports.advertiserLogin = advertiserLogin;
async function advertiserSignUp(req) {
}
exports.advertiserSignUp = advertiserSignUp;
