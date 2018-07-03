"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = require("nodemailer");
/**
 * Send an email to client after successfull registration/signup
 *
 * @export
 * @param {string} to email to send message
 * @param {string} message message to send
 */
async function sendMail(to, message) {
    let transport = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'noreply.adexchange@gmail.com',
            pass: '25812345Dan'
        }
    });
    return await transport.sendMail({
        from: 'info@tickles-adexchange.net',
        to: to,
        subject: 'Account Verification Email',
        text: message
    }).then(result => result.accepted ? true : false).catch(err => false);
}
exports.sendMail = sendMail;
