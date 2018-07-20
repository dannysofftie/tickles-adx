"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router({ strict: true, caseSensitive: true });
router.post('/signup', async (req, res) => {
    console.log(req.body);
    res.end();
});
router.post('*', (req, res) => {
    // error page
    res.end();
});
router.get('*', (req, res) => {
    // error page
    res.end();
});
module.exports = router;
