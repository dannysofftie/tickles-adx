
import { HttpRequest } from '.'
import { Request, Response } from 'express'
import * as formidable from 'formidable'

interface T {
    title: string,
    client: string,
    balance: string,
    referralAwards: string,
    averageSpend: string,
    totalCampaigns: string,
    totalAds: string
}

export async function clientData(id: string, ref?: string): Promise<T> {
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
    }
}


/**
 * handles ad publishing including file uploads (images or gif videos for advertisement if any)
 * @param req request object from client
 */
export async function publishAdvertisement(req: Request, res: Response) {
    let form = new formidable.IncomingForm()
    form.uploadDir = './uploads/'
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
        console.log(files.adDisplayImage.name)
        requestBody(fields)
    })
    form.on('progress', (bytesReceived, bytesExpected) => {
        console.log((Math.ceil(Number(bytesReceived) / Number(bytesExpected) * 100)) + '%')
    })
    async function requestBody(body: object) {
        let result = await new HttpRequest().post('/api/v1/publish/publish-ad', req.body).catch(e => e ? e.code : [])
        console.log(body)
        res.status(res.statusCode).json(body)
    }
}

/**
 * retrieve businessCategories
 * @param req request object
 * @param res response object
 */
export async function businessCategories(req: Request, res: Response) {
    let categories = await new HttpRequest().get('/api/v1/data/business-categories').catch(e => e ? { error: 'Unreachable' } : [])
    res.setHeader('Content-Type','application/json')
    res.status(res.statusCode).send(categories)
}

/**
 * save campaign to database
 * @param req request object
 * @param res response object
 */
export async function saveCampaign(req: Request, res: Response) {
    console.log(req.body)
    // check cookie
    res.status(res.statusCode).json(req.body)
}

/**
 * retrieve campaigns from database
 * @param req request object
 * @param res response object
 */
export async function retrieveCampaigns(req: Request, res: Response) {
    // check cookie session id to retrieve correctly
    res.status(res.statusCode).json([
        { campaignName: 'Accessories holiday offer', campaignValue: 18 },
        { campaignName: 'Electronics promotion', campaignValue: 8 }
    ])
}