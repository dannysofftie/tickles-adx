"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/', (req, res) => {
    res.render('index', { title: 'Ad Exchange for Publishers | Advertisers' });
});
router.get('/publisher', (req, res) => {
    res.render('publisher/index', { title: 'Ad Exchange for Publishers' });
});
router.get('/advertiser', (req, res) => {
    res.render('advertiser/index', { title: 'Ad Exchange for Advertisers' });
});
// other routes
// router.use('/', require('./index'))
module.exports = router;
