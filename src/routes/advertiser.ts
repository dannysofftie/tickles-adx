import { Router } from 'express'
import { advertiserLogin } from '../utils'

const router = Router()

router.get('/', (req, res) => {
    // if (req.protocol == 'http')
    //     res.redirect('https://' + req.get('Host') + req.originalUrl)
    // else
    res.render('advertiser/index', { title: 'Ad Exchange for Advertisers' })
})

router.post('/login', async (req, res) => {
    let apiResponse = await advertiserLogin(req).catch(err => err)
    res.end(apiResponse)
})

router.post('/signup', async (req, res) => {

    res.end(JSON.stringify(req.body))
})
module.exports = router