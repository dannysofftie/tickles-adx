/**
 * author Danny Sofftie <dankim761@gmail.com> Mon 18th June 2018
 * all routes requesting page view requests will be handled by this route
 */

import { Router } from 'express'
import { clientData, getPublisherDetails } from '../utils'

const router = Router()

router.get('/', (req, res) => {
    res.render('index', { title: 'Ad-Exchange for advertisers | publishers' })
})

router.get('/client', (req, res) => {
    res.render('advertiser/index', { title: 'Ad Exchange for Advertisers' })
})

router.get('/client/signin', async (req, res) => {
    res.render('advertiser/signin', { title: 'Ad Exchange for Advertisers' })
})

router.get('/client/signup', async (req, res) => {
    res.render('advertiser/signup', { title: 'Ad Exchange for Advertisers' })
})

router.get('/client/dashboard', async (req, res) => {
    res.render('advertiser/dashboard', await clientData(req.headers['client-ssid']).catch(e => []))
})
router.get('/client/create-campaign', async (req, res) => {
    res.render('advertiser/create-campaign', await clientData(req.headers['client-ssid']).catch(e => []))
})
router.get('/client/manage-campaign', async (req, res) => {
    res.render('advertiser/manage-campaigns', await clientData(req.headers['client-ssid']).catch(e => []))
})
router.get('/client/campaign-statistics', async (req, res) => {
    res.render('advertiser/campaign-stats', await clientData(req.headers['client-ssid']).catch(e => []))
})
router.get('/client/payment-wallet', async (req, res) => {
    res.render('advertiser/payment-wallet', await clientData(req.headers['client-ssid']).catch(e => []))
})
router.get('/client/referral-program', async (req, res) => {
    res.render('advertiser/referral-program', await clientData(req.headers['client-ssid']).catch(e => []))
})

// publisher routes
router.get('/publisher', (req, res) => {
    res.render('publisher/index', { title: 'Adexchange for Publishers', navigationLink: '/publisher/signup', navigationText: 'Sign up' })
})

router.get('/publisher/signup', (req, res) => {
    res.render('publisher/signup', { title: 'Publisher signup', navigationLink: 'javascript:void(0)', navigationText: 'Sign in' })
})

router.get('/publisher/dashboard', async (req, res) => {
    res.render('publisher/dashboard', await getPublisherDetails(req))
})

router.get('/publisher/embed', (req, res) => {
    res.render('publisher/embed')
})
export = router