"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
class SocketsServer extends events_1.EventEmitter {
    constructor(ws, socket, req) {
        super();
        this.ws = ws;
        this.serveClient(socket, req);
    }
    /**
     *
     * @param socket
     * @param req
     */
    serveClient(socket, req) {
        // possible errors when receiving client messages and sending back response
        // suppress such errors in this socket module
        // to avoid the server breaking, handle such errors like a pro when client fails to close connection socket
        process.on('uncaughtException', (err) => {
            // suppress errors
            // alternatively, close socket on the client side on every response from server
            let fullTrace = err.stack;
            let errName = err.name;
            let errMessage = err.message;
        });
        socket.on('message', (data) => {
            socket.send('I have received some ' + data);
        });
        this.on('received', (data) => {
            console.log(data);
        });
    }
    static test() {
        // some test
    }
}
exports.SocketsServer = SocketsServer;
