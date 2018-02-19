import * as express from "express"
import * as fs from 'fs'
import * as url from 'url'
import * as path from 'path'

const router: express.Router = express.Router()

router.get('/', (req: express.Request, res: express.Response) => {
    res.render('index.html', { title: 'Hey', message: 'Hello there!' })
})

module.exports = router
