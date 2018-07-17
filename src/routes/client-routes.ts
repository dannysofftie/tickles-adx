/**
 * author Danny Sofftie <dankim761@gmail.com> Mon 18th June 2018
 * all routes requesting advertiser data will be handled by this route
 */

import { Router } from 'express'
import { advertiserLogin, businessCategories, advertiserSignUp } from '../utils'

const router = Router()

router.post('/client-login', advertiserLogin)

router.post('/client-signup', advertiserSignUp)

router.get('/business-group-categories', businessCategories)

export = router