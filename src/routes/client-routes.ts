/**
 * author Danny Sofftie <dankim761@gmail.com> Mon 18th June 2018
 * all routes requesting advertiser data will be handled by this route
 */

import { Router } from 'express'
import { verifyCaptcha, advertiserLogin, clientData, cookieExists } from '../utils'

const router = Router()

router.post('/client-login', async (req, res) => {
    // verify google captcha
    let gRes = await verifyCaptcha(req.body['g-recaptcha-response'], req.ip).catch(err => err.code ? { error: err.code } : err)
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
    res.cookie('SSID', 'gsg63g0gbcd53b', { path: '/', maxAge: 1000 * 60 * 60 * 24 })
    return res.status(res.statusCode).json({ message: 'success' })
    // return res.render('advertiser/index', { error: 'Couldn\'t contact recaptcha', title: 'Captcha error | Unreachable' })
})

router.post('/client-signup', async (req, res) => {
    // sign client up, follow oAuth protocol,
    // jwt standards and similar authentication protocols

    return res.end()
})

router.get('/business-group-categories', (req, res) => {

    res.status(res.statusCode).json([
        { businessGroup: 'Beauty and fragrances', groupValue: '1' },
        { businessGroup: 'Books and magazines', groupValue: '2' },
        { businessGroup: 'Clothing, accessories, and shoes', groupValue: '3' },
        { businessGroup: 'Entertainment and media', groupValue: '4' }
    ])
})
router.get('/retrieve-campaigns', (req, res) => {
    // check cookie session id to retrieve correctly
    res.status(res.statusCode).json([{ campaignName: 'Accessories holiday offer', campaignValue: 18 }, { campaignName: 'Electronics promotion', campaignValue: 8 }])
})

router.post('/save-campaign', (req, res) => {
    console.log(req.body)
    res.status(res.statusCode).json(req.body)
})

export = router