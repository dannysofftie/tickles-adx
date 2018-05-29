"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const utils_1 = require("../utils");
const router = express_1.Router();
router.get('/', (req, res) => {
    // if (req.protocol == 'http')
    //     res.redirect('https://' + req.get('Host') + req.originalUrl)
    // else
    res.render('advertiser/index', { title: 'Ad Exchange for Advertisers' });
});
router.post('/login', async (req, res) => {
    let apiResponse = await utils_1.advertiserLogin(req).catch(err => err);
    res.end(apiResponse);
});
router.post('/signup', async (req, res) => {
    res.end(JSON.stringify(req.body));
});
module.exports = router;
