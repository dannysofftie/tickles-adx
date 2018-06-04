"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const https = require("https");
const http = require("http");
const SERVER_URL = process.env.NODE_ENV == 'production' ? 'adxserver.herokuapp.com' : '127.0.0.1';
async function name(req, path) {
    return new Promise((resolve, reject) => {
        const postRequest = process.env.NODE_ENV === 'production'
            ? https.request({ host: SERVER_URL, path: path, method: 'POST', headers: { 'Content-Type': 'application/json' } }, (res) => {
                res.setEncoding('utf8');
                res.on('data', data => resolve(data.toString()));
                res.on('error', err => reject(err));
            }) : http.request({ host: SERVER_URL, port: 5000, path: path, method: 'POST', headers: { 'Content-Type': 'application/json' } }, (res) => {
            res.setEncoding('utf8');
            res.on('data', data => resolve(data.toString()));
            res.on('error', err => reject(err));
        });
        postRequest.write(JSON.stringify({ captchaValue: req.body['g-recaptcha-response'], ip: req.ip, username: req.body.username, password: req.body.password }));
        postRequest.on('error', err => reject(err));
        postRequest.end();
    });
}
exports.name = name;
