"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function clientData(id) {
    // do database/API data request for specific client
    // return an object with client data
    // return await new HttpRequest().request(path, data).catch(err => err)
    return {
        title: 'Tickles All in one dashboard || Client portal',
        client: 'Jessica Pearson',
        balance: '108.80',
        referralAwards: '0.00',
        averageSpend: '0.00',
        totalCampaigns: '0',
        totalAds: '0'
    };
}
exports.clientData = clientData;
