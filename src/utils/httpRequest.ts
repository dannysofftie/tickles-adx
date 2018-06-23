import * as https from 'https'
import * as http from 'http'

export class HttpRequest {
    private env: boolean
    private serverUrl: string
    private req: Function
    private port: number

    constructor() {
        this.env = process.env.NODE_ENV === 'production'
        this.serverUrl = this.env ? 'adxserver.herokuapp.com' : '127.0.0.1'
        this.port = this.env ? 443 : 5000
        this.req = this.env ? https.request : http.request
    }

    public async post(path: string, data: {}) {
        return new Promise((resolve, reject) => {
            let req = this.req({ host: this.serverUrl, port: this.port, path: path, method: 'POST', headers: { 'Content-Type': 'application/json' } }, (res) => {
                res.setEncoding('utf8')
                res.on('data', data => resolve(data.toString()))
                res.on('error', err => reject(err))
            })
            req.write(JSON.stringify(data))
            req.on('error', err => reject(err))
            req.end()
        })
    }

    public async get(path: string) {
        return new Promise((resolve, reject) => {
            let req = this.req({ host: this.serverUrl, port: this.port, path: path, method: 'GET' }, (res) => {
                res.setEncoding('utf8')
                res.on('data', data => resolve(data.toString()))
                res.on('error', err => reject(err))
            })
            req.on('error', err => reject(err))
            req.end()
        })
    }
}
