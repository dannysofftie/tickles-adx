import * as https from 'https'
import * as http from 'http'

const SERVER_URL = process.env.NODE_ENV == 'production' ? 'adxserver.herokuapp.com' : '127.0.0.1'

export async function request(data: {} | Array<string | number>, path: string): Promise<Array<string> | {}> {
    return new Promise((resolve, reject) => {
        const pRequest = process.env.NODE_ENV === 'production'
            ? https.request({ host: SERVER_URL, path: path, method: 'POST', headers: { 'Content-Type': 'application/json' } }, (res) => {
                res.setEncoding('utf8')
                res.on('data', data => resolve(data.toString()))
                res.on('error', err => reject(err))
            }) : http.request({ host: SERVER_URL, port: 5000, path: path, method: 'POST', headers: { 'Content-Type': 'application/json' } }, (res) => {
                res.setEncoding('utf8')
                res.on('data', data => resolve(data.toString()))
                res.on('error', err => reject(err))
            })

        pRequest.write(JSON.stringify(data))
        pRequest.on('error', err => reject(err))
        pRequest.end()
    })
}