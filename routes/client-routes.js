"use strict";
/**
 * author Danny Sofftie <dankim761@gmail.com> Mon 18th June 2018
 * all routes requesting advertiser data will be handled by this route
 */
const express_1 = require("express");
const utils_1 = require("../utils");
const router = express_1.Router();
router.post('/client-login', async (req, res) => {
    // verify google captcha
    let gRes = await utils_1.verifyCaptcha(req.body['g-recaptcha-response'], req.ip).catch(err => err.code ? { error: err.code } : err);
    try {
        let data = JSON.parse(gRes.toString());
        if (data.success && data.success != false) {
            // authorize login
            let apiRes = await utils_1.advertiserLogin(req);
            if (apiRes.code)
                return res.status(res.statusCode).json({ error: 'CANT_CONTACT_API_SERVER' });
            else {
                // start session and send http cookies to the client, then redirect 
                // res.redirect('/client/advertiser/dashboard')
            }
        }
    }
    catch (err) {
        // error parsing json, jump to return statement below
    }
    return res.status(res.statusCode).json({ message: 'success' });
    // return res.render('advertiser/index', { error: 'Couldn\'t contact recaptcha', title: 'Captcha error | Unreachable' })
});
router.post('/client-signup', async (req, res) => {
    // sign client up, follow oAuth protocol,
    // jwt standards and similar authentication protocols
    return res.end();
});
router.get('/adv/dashboard', async (req, res) => {
    // let url = req.query.url
    // if (url) {
    //     res.setHeader('Content-Type', 'text/html')
    //     if (url == 'create-campaign')
    //         return res.render('advertiser/create-campaign', await clientData('user-id'))
    //     if (url == 'manage-campaign')
    //         return res.render('advertiser/manage-campaigns')
    //     if (url == 'campaign-statistics')
    //         return res.render('advertiser/campaign-stats')
    //     if (url == 'payment-wallet')
    //         return res.render('advertiser/payment-wallet')
    //     if (url == 'referral-program')
    //         return res.render('advertiser/referral-program')
    //     return
    // }
    // retrieve client details
    // full name, account balance, ad campaigns, referral awards and related 'view at glance' data
    // await clientData('user-id'), user-id is retrieved from http cookies
    return res.render('advertiser/dashboard', await utils_1.clientData('user-id'));
});
// handle similar route as above, but with parameters
router.get('/adv/dashboard/:parameters', async (req, res) => {
    // retrieve client details
    // full name, account balance, ad campaigns, referral awards and related 'view at glance' data
    // await clientData('user-id'), user-id is retrieved from http cookies
    return res.render('advertiser/dashboard', await utils_1.clientData('user-id'));
});
module.exports = router;
