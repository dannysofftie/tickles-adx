import { Router } from 'express'
import { verifyCaptcha, advertiserLogin } from '../utils'

const router = Router()

router.get('/', (req, res) => {
    res.render('advertiser/index', { title: 'Ad Exchange for Advertisers' })
})

router.post('/client-login', async (req, res) => {
    // verify google captcha
    let gRes = await verifyCaptcha(req.body['g-recaptcha-response'], req.ip).catch(err => err)
    try {
        let data = JSON.parse(gRes.toString())
        if (data.success && data.success != false) {
            // authorize login
            let apiResponse = await advertiserLogin(req).catch(err => err)
            if (apiResponse.code)
                return res.status(res.statusCode).json({ error: 'CANT_CONTACT_RECAPTCHA' })
            else {
                // start session
            }
        }
    } catch {
        // error parsing json, jump to return statement below
    }
    return res.redirect('/client/advertiser/dashboard')
    // return res.render('advertiser/index', { error: 'Couldn\'t contact recaptcha', title: 'Captcha error | Unreachable' })
})

router.post('/client-signup', async (req, res) => {
    console.log(req.body)
    return res.end()
})

router.get('/advertiser/dashboard', (req, res) => {
    res.render('advertiser/dashboard', { title: 'All in one dashboard | Client portal', client: 'Jessica Pearson', balance: '208.80' })
})
module.exports = router