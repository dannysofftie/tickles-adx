"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const formidable = require("formidable");
async function clientData(id, ref) {
    // do database/API data request for specific client
    // return an object with client data
    // return await new HttpRequest().request(path, data).catch(err => err)
    return {
        title: 'Tickles All in one dashboard || Client portal',
        client: 'Jessica Pearson',
        balance: '10.80',
        referralAwards: '0.00',
        averageSpend: '0.00',
        totalCampaigns: '0',
        totalAds: '0'
    };
}
exports.clientData = clientData;
/**
 * handles ad publishing including file uploads (images or gif videos for advertisement if any)
 * @param req request object from client
 */
async function publishAdvertisement(req, res) {
    let form = new formidable.IncomingForm();
    form.uploadDir = './uploads/';
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        console.log(files.adDisplayImage.name);
        requestBody(fields);
    });
    form.on('progress', (bytesReceived, bytesExpected) => {
        console.log((Math.ceil(Number(bytesReceived) / Number(bytesExpected) * 100)) + '%');
    });
    async function requestBody(body) {
        let result = await new _1.HttpRequest().post('/api/v1/publish/publish-ad', req.body).catch(e => e ? e.code : []);
        console.log(body);
        res.status(res.statusCode).json(body);
    }
}
exports.publishAdvertisement = publishAdvertisement;
/**
 * retrieve businessCategories
 * @param req request object
 * @param res response object
 */
async function businessCategories(req, res) {
    let categories = await new _1.HttpRequest().get('/api/v1/data/business-categories').catch(e => e ? { error: 'Unreachable' } : []);
    res.setHeader('Content-Type', 'application/json');
    res.status(res.statusCode).send(categories);
}
exports.businessCategories = businessCategories;
/**
 * save campaign to database
 * @param req request object
 * @param res response object
 */
async function saveCampaign(req, res) {
    console.log(req.body);
    // check cookie
    res.status(res.statusCode).json(req.body);
}
exports.saveCampaign = saveCampaign;
/**
 * retrieve campaigns from database
 * @param req request object
 * @param res response object
 */
async function retrieveCampaigns(req, res) {
    // check cookie session id to retrieve correctly
    res.status(res.statusCode).json([
        { campaignName: 'Accessories holiday offer', campaignValue: 18 },
        { campaignName: 'Electronics promotion', campaignValue: 8 }
    ]);
}
exports.retrieveCampaigns = retrieveCampaigns;
