import * as path from 'path'
import * as url from 'url'
import * as WebSocket from 'ws'
import * as http from 'http'
import { EventEmitter } from 'events'

interface ISockets {
    ws: WebSocket.Server
    serveClient(socket: WebSocket, req: http.IncomingMessage): void
}

export class SocketsServer extends EventEmitter implements ISockets {
    ws: WebSocket.Server

    constructor(ws: WebSocket.Server, socket: WebSocket, req: http.IncomingMessage) {
        super()
        this.ws = ws
        this.serveClient(socket, req)
    }
    /**
     * 
     * @param socket 
     * @param req 
     */
    public serveClient(socket: WebSocket, req: http.IncomingMessage): void {
        // possible errors when receiving client messages and sending back response
        // suppress such errors in this socket module
        // to avoid the server breaking, handle such errors like a pro when client fails to close connection socket
        process.on('uncaughtException', (err) => {
            // suppress errors
            // alternatively, close socket on the client side on every response from server
            let fullTrace = err.stack
            let errName = err.name
            let errMessage = err.message
        })
        socket.on('message', (data) => {
            socket.send('I have received some ' + data)
        })

        this.on('received', (data: any) => {
            console.log(data)
        })
    }
    private static test(): void {
        // some test

    }
}

