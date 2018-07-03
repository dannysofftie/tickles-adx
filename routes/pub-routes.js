"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router({ strict: true, caseSensitive: true });
router.get('/', (req, res) => {
    res.render('publisher/index', { title: 'Ad Exchange for Publishers | Developers' });
});
router.post('/login', async (req, res) => {
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
