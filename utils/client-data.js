"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multer = require("multer");
const uploads = multer({ dest: 'uploads/client' }).single('adDisplayImage');
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
    console.log(req.file, req.body);
}
exports.publishAdvertisement = publishAdvertisement;
/**
 * retrieve businessCategories
 * @param req request object
 * @param res response object
 */
async function businessCategories(req, res) {
    res.status(res.statusCode).json([
        { businessGroup: 'Beauty and fragrances', groupValue: '1' },
        { businessGroup: 'Books and magazines', groupValue: '2' },
        { businessGroup: 'Clothing, accessories, and shoes', groupValue: '3' },
        { businessGroup: 'Entertainment and media', groupValue: '4' }
    ]);
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
