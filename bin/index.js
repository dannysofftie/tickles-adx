"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
// start AdServer
(async () => {
    await new server_1.AdWebServer().startServer().catch(console.error);
})();
