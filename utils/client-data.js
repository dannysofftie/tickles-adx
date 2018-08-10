"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const Publisher_1 = require("../models/Publisher");
async function clientData(ssid) {
    let advertiser = await new _1.HttpRequest().get('/api/v1/data/advertiser-details', { 'client-ssid': ssid }).catch(err => { }), totalCampaigns = await new _1.HttpRequest().get('/api/v1/data/get-campaigns', { 'client-ssid': ssid }).catch(err => { }), totalAds = await new _1.HttpRequest().get('/api/v1/data/get-advertiser-ads', { 'client-ssid': ssid }).catch(err => { });
    // do another request to retrieve advertiser metadata
    return {
        title: 'Tickles All in one dashboard || Client portal',
        client: advertiser[0]['fullNames'],
        balance: Number(advertiser[0]['accountBalance']).toFixed(2),
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
    let pubssid = req.headers['client-ssid'], siteData = await Publisher_1.default.aggregate([
        {
            $match: { publisherSsid: pubssid }
        }, {
            $lookup: {
                from: 'businesscategories',
                localField: 'businessCategory',
                foreignField: '_id',
                as: 'business'
            }
        }, {
            $project: {
                publisherPassword: 0
            }
        }
    ]);
    return Object.assign({}, siteData[0]);
}
exports.getPublisherDetails = getPublisherDetails;
