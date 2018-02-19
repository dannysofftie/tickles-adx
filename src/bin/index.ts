import server = require('./server')
import * as os from 'os'
import * as cluster from 'cluster'


class App {
    private PORT: number | string
    private CPUS: number

    constructor() {
        this.PORT = process.env.PORT || 4000
        this.CPUS = os.cpus().length
        // scale server before requests come in
        this.scaleServer()
    }

    public normalizePort(port: any): number {
        if (typeof port == 'function') {
            throw new TypeError("Function not accepted as port")
        } else if (typeof port == 'string') {
            return 4000
        } else if (typeof port == 'undefined') {
            return 4000
        } else if (typeof port == 'object') {
            throw new TypeError("Argument of type object not supported")
        } else if (isNaN(port)) {
            return 4000
        } else {
            return port
        }
    }

    public scaleServer(): void {
        if (cluster.isMaster) {
            // Main process
            for (let i = 0; i < this.CPUS; i++) {
                cluster.fork()
            }
        } else {
            //Worker process
            server.listen(this.normalizePort(this.PORT), () => {
                console.log(`Server process: ${process.pid} listening on port: ${this.normalizePort(this.PORT)}`)
            })
        }
    }
}

// start server
export = new App()
