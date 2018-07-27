#!/usr/bin/env node
"use strict";
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const serveFavicon = require("serve-favicon");
const cors = require("cors");
const http = require("http");
const os = require("os");
const cluster = require("cluster");
const mongoose = require("mongoose");
const ENV_CPUS = process.env.NODE_ENV === 'production' ? os.cpus().length : 1, log = console.log;
class AdWebServer {
    constructor() {
        this.port = process.env.PORT || 4000;
        this.app = express();
        this.server = http.createServer(this.app);
        this.MONGO_URI = process.env.MONGO_URI;
        this.configs();
        this.routes();
    }
    configs() {
        this.app.set('view engine', 'pug');
        this.app.disable('x-powered-by');
        mongoose.connect(this.MONGO_URI, { useNewUrlParser: true }).catch(e => e);
        this.app.use(cookieParser());
        this.app.use(express.static(path.join(__dirname, '../', 'public')));
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(cors());
        this.app.use(serveFavicon('ads.ico'));
    }
    routes() {
        // router to handle page view requests
        this.app.use('/page-view', require('../routes/page-routes'));
        // router to handle data requests from advertiser/client
        this.app.use('/api/client', require('../routes/client-routes'));
        // router to handle data requests from publishers
        this.app.use('/api/publisher', require('../routes/publisher-routes'));
        // route all traffic to default page for client-side routing to work
        this.app.use((req, res) => res.render('default', { title: 'Ad Exchange for Publishers | Advertisers' }));
    }
    normalizePort(port) {
        if (typeof port == 'undefined') {
            throw new Error('Expected parameter port number but found none');
        }
        else if (typeof port == 'function') {
            throw new TypeError('Argument of type function can\'t used as port');
        }
        else if (typeof port == 'object') {
            throw new TypeError('Argument of type object can\'t be used as port');
        }
        else if (isNaN(port)) {
            process.exit(1);
        }
        return port;
    }
    async startServer() {
        var e_1, _a;
        if (cluster.isMaster) {
            for (let i = 0; i < ENV_CPUS; i++) {
                cluster.fork();
            }
            try {
                // spin core on ['disconnect', 'exit']                               
                for (var _b = __asyncValues(['disconnect', 'exit']), _c; _c = await _b.next(), !_c.done;) {
                    const event = _c.value;
                    cluster.on(event, () => cluster.fork());
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) await _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        else {
            // @ts-ignore
            let normalizedPort = this.normalizePort(this.port);
            this.server.listen(normalizedPort, () => {
                log(`Server process: ${process.pid} listening on port: ${normalizedPort}`);
            });
            process.on('uncaughtException', async (err) => {
                // @ts-ignore
                if (err.code == 'EADDRINUSE')
                    await this.startServer();
            });
        }
    }
}
exports.AdWebServer = AdWebServer;
