import { Router } from 'express'
import { publisherSignUp, publisherSignIn } from '../utils'

const router = Router({ strict: true, caseSensitive: true })

router.post('/signup', publisherSignUp)

router.post('/signin', publisherSignIn)

router.post('*', (req, res) => {
    // error page
    res.end()
})

router.get('*', (req, res) => {
    // error page
    res.end()
})

module.exports = router