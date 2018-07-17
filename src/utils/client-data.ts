
import { HttpRequest } from '.'
import { Request, Response } from 'express'

interface T {
    title: string,
    client: string,
    balance: string,
    referralAwards: string,
    averageSpend: string,
    totalCampaigns: any,
    totalAds: string | any
}

export async function clientData(ssid: string | Array<string>): Promise<T> {

    let advertiser = await new HttpRequest().get('/api/v1/data/advertiser-details', { 'client-ssid': ssid }).catch(err => { }),
        totalCampaigns = await new HttpRequest().get('/api/v1/data/get-campaigns', { 'client-ssid': ssid }).catch(err => { }),
        totalAds = await new HttpRequest().get('/api/v1/data/get-advertiser-ads', { 'client-ssid': ssid }).catch(err => { })
    // do another request to retrieve advertiser metadata
    return {
        title: 'Tickles All in one dashboard || Client portal',
        client: advertiser['fullNames'],
        balance: advertiser['accountBalance'],
        referralAwards: '0.00',
        averageSpend: '0.00',
        totalCampaigns: totalCampaigns,
        totalAds: totalAds
    }
}

/**
 * retrieve businessCategories
 * @param req request object
 * @param res response object
 */
export async function businessCategories(req: Request, res: Response) {
    let categories = await new HttpRequest().get('/api/v1/data/business-categories').catch(err => ({ error: err }))
    res.setHeader('Content-Type', 'application/json')
    res.status(res.statusCode).send(categories)
}
