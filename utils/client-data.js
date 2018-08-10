"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const Publisher_1 = require("../models/Publisher");
const originCookies_1 = require("./originCookies");
async function clientData(ssid) {
    let advertiser = await new _1.HttpRequest().get('/api/v1/data/advertiser-details', { 'client-ssid': ssid }).catch(err => { }), totalCampaigns = await new _1.HttpRequest().get('/api/v1/data/get-campaigns', { 'client-ssid': ssid }).catch(err => { }), totalAds = await new _1.HttpRequest().get('/api/v1/data/get-advertiser-ads', { 'client-ssid': ssid }).catch(err => { });
    // do another request to retrieve advertiser metadata
    return {
        title: 'Tickles All in one dashboard || Client portal',
        client: advertiser['fullNames'],
        balance: advertiser['accountBalance'],
        referralAwards: '0.00',
        averageSpend: '0.00',
        // @ts-ignore
        totalCampaigns: totalCampaigns.length,
        totalAds: totalAds
    };
}
exports.clientData = clientData;
/**
 * retrieve businessCategories
 * @param req request object
 * @param res response object
 */
async function businessCategories(req, res) {
    let categories = await new _1.HttpRequest().get('/api/v1/data/business-categories').catch(err => ({ error: err }));
    res.setHeader('Content-Type', 'application/json');
    res.status(res.statusCode).send(categories);
}
exports.businessCategories = businessCategories;
async function getPublisherDetails(req) {
    let PUBSSID = originCookies_1.cookieExists(req.headers.cookie, 'PUBSSID');
    let siteData = await Publisher_1.default.aggregate([
        {
            $match: { publisherSsid: PUBSSID }
        }, {
            $lookup: {
                from: 'businesscategories',
                localField: 'businessCategory',
                foreignField: '_id',
                as: 'businessCategory'
            }
        }
    ]);
    return {
        pubslisherSiteUrl: 'http://dannysofftie.github.io'
    };
}
exports.getPublisherDetails = getPublisherDetails;
