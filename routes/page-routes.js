"use strict";
/**
 * author Danny Sofftie <dankim761@gmail.com> Mon 18th June 2018
 * all routes requesting page view requests will be handled by this route
 */
const express_1 = require("express");
const utils_1 = require("../utils");
const router = express_1.Router();
router.get('/', (req, res) => {
    res.render('index', { title: 'Ad-Exchange for advertisers | publishers' });
});
router.get('/client', (req, res) => {
    res.render('advertiser/index', { title: 'Ad Exchange for Advertisers' });
});
router.get('/client/signin', async (req, res) => {
    res.render('advertiser/signin', { title: 'Ad Exchange for Advertisers' });
});
router.get('/client/signup', async (req, res) => {
    res.render('advertiser/signup', { title: 'Ad Exchange for Advertisers' });
});
router.get('/client/dashboard', async (req, res) => {
    res.render('advertiser/dashboard', await utils_1.clientData(req.headers['client-ssid']).catch(e => []));
});
router.get('/client/create-campaign', async (req, res) => {
    res.render('advertiser/create-campaign', await utils_1.clientData(req.headers['client-ssid']).catch(e => []));
});
router.get('/client/manage-campaign', async (req, res) => {
    res.render('advertiser/manage-campaigns', await utils_1.clientData(req.headers['client-ssid']).catch(e => []));
});
router.get('/client/campaign-statistics', async (req, res) => {
    res.render('advertiser/campaign-stats', await utils_1.clientData(req.headers['client-ssid']).catch(e => []));
});
router.get('/client/payment-wallet', async (req, res) => {
    res.render('advertiser/payment-wallet', await utils_1.clientData(req.headers['client-ssid']).catch(e => []));
});
router.get('/client/referral-program', async (req, res) => {
    res.render('advertiser/referral-program', await utils_1.clientData(req.headers['client-ssid']).catch(e => []));
});
module.exports = router;
