/**
 * author Danny Sofftie <dankim761@gmail.com> Mon 18th June 2018
 * all routes requesting advertiser data will be handled by this route
 */

import { Router } from 'express'
import {
    advertiserLogin, publishAdvertisement,
    businessCategories, saveCampaign, retrieveCampaigns, advertiserSignUp
} from '../utils'

const router = Router()

router.post('/client-login', advertiserLogin)

router.post('/client-signup', advertiserSignUp)

router.get('/business-group-categories', businessCategories)

router.get('/retrieve-campaigns', retrieveCampaigns)

router.post('/save-campaign', saveCampaign)

router.post('/publish-ad', publishAdvertisement)


export = router