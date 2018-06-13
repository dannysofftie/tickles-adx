import { Router } from 'express'
import { verifyCaptcha, advertiserLogin, clientData } from '../utils'

const router = Router()

router.get('/', (req, res) => {
    res.render('advertiser/index', { title: 'Ad Exchange for Advertisers' })
})

router.post('/client-login', async (req, res) => {
    // verify google captcha
    let gRes = await verifyCaptcha(req.body['g-recaptcha-response'], req.ip).catch(err => err.code ? { error: err.code } : err)
    console.log(gRes)
    try {
        let data = JSON.parse(gRes.toString())
        if (data.success && data.success != false) {
            // authorize login
            let apiRes = await advertiserLogin(req)

            if (apiRes.code)
                return res.status(res.statusCode).json({ error: 'CANT_CONTACT_API_SERVER' })
            else {
                // start session and send http cookies to the client, then redirect 
                // res.redirect('/client/advertiser/dashboard')
            }
        }
    } catch (err) {
        // error parsing json, jump to return statement below
    }
    return res.redirect('/client/advertiser/dashboard')
    // return res.render('advertiser/index', { error: 'Couldn\'t contact recaptcha', title: 'Captcha error | Unreachable' })
})

router.post('/client-signup', async (req, res) => {
    // sign client up, follow oAuth protocol,
    // jwt standards and similar authentication protocols

    return res.end()
})

router.get('/advertiser/dashboard', async (req, res) => {

    // retrieve client details
    // full name, account balance, ad campaigns, referral awards and related 'view at glance' data
    // await clientData('user-id'), user-id is retrieved from http cookies
    return res.render('advertiser/dashboard', await clientData('user-id'))
})

// handle similar route as above, but with parameters
router.get('/advertiser/dashboard/:parameters', async (req, res) => {
    // retrieve client details
    // full name, account balance, ad campaigns, referral awards and related 'view at glance' data
    // await clientData('user-id'), user-id is retrieved from http cookies
    return res.render('advertiser/dashboard', await clientData('user-id'))
})



module.exports = router