import { Router } from 'express'
const router = Router({ strict: true, caseSensitive: true })

router.get('/', (req, res) => {
    res.render('publisher/index', { title: 'Ad Exchange for Publishers | Developers' })
})

router.post('/login', async (req, res) => {

})

router.post('*', (req, res) => {
    // error page
    res.end()
})
router.get('*', (req, res) => {
    // error page
    res.end()
})
module.exports = router