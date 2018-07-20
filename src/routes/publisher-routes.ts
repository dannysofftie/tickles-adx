import { Router } from 'express'
const router = Router({ strict: true, caseSensitive: true })

router.post('/signup', async (req, res) => {
    console.log(req.body)
    res.end()
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