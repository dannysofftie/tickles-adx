import * as nodemailer from 'nodemailer'

/**
 * Send an email to client after successfull registration/signup
 *
 * @export
 * @param {string} to email to send message
 * @param {string} message message to send
 */
export async function sendMail(to: string, message: string) {
    let transport = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'noreply.adexchange@gmail.com',
            pass: '25812345Dan'
        }
    })
    return await transport.sendMail({
        from: 'info@tickles-adexchange.net',
        to: to,
        subject: 'Account Verification Email',
        text: message
    }).then(result => result.accepted ? true : false).catch(err => false)
}