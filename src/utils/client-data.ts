
import { HttpRequest } from '.'
import * as multer from 'multer'
import { Request, Response } from 'express'
const uploads = multer({ dest: 'uploads/client' }).single('adDisplayImage')

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
    console.log(req.file, req.body)
}

/**
 * retrieve businessCategories
 * @param req request object
 * @param res response object
 */
export async function businessCategories(req: Request, res: Response) {
    res.status(res.statusCode).json([
        { businessGroup: 'Beauty and fragrances', groupValue: '1' },
        { businessGroup: 'Books and magazines', groupValue: '2' },
        { businessGroup: 'Clothing, accessories, and shoes', groupValue: '3' },
        { businessGroup: 'Entertainment and media', groupValue: '4' }
    ])
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