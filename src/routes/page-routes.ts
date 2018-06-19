/**
 * author Danny Sofftie <dankim761@gmail.com> Mon 18th June 2018
 * all routes requesting page view requests will be handled by this route
 */

import { Router } from 'express'
import { verifyCaptcha, advertiserLogin, clientData } from '../utils'

const router = Router()

router.get('/', (req, res) => {
    res.render('index', { title: 'Ad-Exchange for advertisers | publishers' })
})
router.get('/client', (req, res) => {
    res.render('advertiser/index', { title: 'Ad Exchange for Advertisers' })
})
router.get('/client/dashboard', async (req, res) => {
    res.render('advertiser/dashboard', await clientData('user-id'))
})
router.get('/client/create-campaign', async (req, res) => {
    res.render('advertiser/create-campaign', await clientData('user-id'))
})
router.get('/client/manage-campaign', async (req, res) => {
    res.render('advertiser/manage-campaigns', await clientData('user-id'))
})
router.get('/client/campaign-statistics', async (req, res) => {
    res.render('advertiser/campaign-stats', await clientData('user-id'))
})
router.get('/client/payment-wallet', async (req, res) => {
    res.render('advertiser/payment-wallet', await clientData('user-id'))
})
router.get('/client/referral-program', async (req, res) => {
    res.render('advertiser/referral-program', await clientData('user-id'))
})

export = router