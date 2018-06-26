/**
 * author Danny Sofftie <dankim761@gmail.com> Mon 18th June 2018
 * all routes requesting advertiser data will be handled by this route
 */

import { Router } from 'express'
import { advertiserLogin, publishAdvertisement, businessCategories, saveCampaign, retrieveCampaigns, advertiserSignUp } from '../utils'
import * as multer from 'multer'

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'uploads/client')
        },
        filename: (req, file, cb) => {
            cb(null, file.originalname)
        }
    }),
    limits: { fileSize: 1024 * 1024 * 2 },
    fileFilter: (req, file, cb) => {
        if (file.mimetype == 'image/png' || file.mimetype == 'image/jpeg') cb(null, true)
        else cb(null, false)
    }
})

const router = Router()

router.post('/client-login', advertiserLogin)

router.post('/client-signup', advertiserSignUp)

router.get('/business-group-categories', businessCategories)

router.get('/retrieve-campaigns', retrieveCampaigns)

router.post('/save-campaign', saveCampaign)

router.post('/publish-ad', upload.single('adDisplayImage'), publishAdvertisement)

export = router