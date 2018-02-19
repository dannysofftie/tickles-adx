import * as path from 'path'
import * as fs from 'fs'
import * as express from 'express'
import * as bodyParser from "body-parser"
import * as cors from "cors"
import * as WebSocket from 'ws'
import * as http from 'http'
import * as url from 'url'

import { SocketsServer } from '../sockets'

/**
 * interface IServer
 */
interface IServer {
    app: express.Application
    router: express.Router
    WS: WebSocket.Server
    server: http.Server
}

/**
 * main AdServer class
 */
class AdServer implements IServer {
    app: express.Application
    router: express.Router
    WS: WebSocket.Server
    server: http.Server

    constructor() {
        this.app = express()
        this.server = http.createServer(this.app)
        this.WS = new WebSocket.Server({ server: this.server })
        this.router = express.Router()
        this.configs()
        this.routes()
    }

    private configs(): void {
        this.app.engine('html', require('ejs').renderFile)
        this.app.use(express.static(path.join(__dirname, '../..', 'public')))
        this.app.use(bodyParser.urlencoded({ extended: true }))
        this.app.use(bodyParser.json())
        this.app.use(cors())
    }
    private routes(): void {
        this.router = express.Router()
        this.app.use('/', require('../routes'))
        this.WS.on('connection', (socket: WebSocket, req: http.IncomingMessage) => {
            new SocketsServer(this.WS, socket, req).emit('received', 'heeeeeeeeeeeey')
        })
        //this.app.use('/ads/api/v1', )
    }
}

// export app
export = new AdServer().server
