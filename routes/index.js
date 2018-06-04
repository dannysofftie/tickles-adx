"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/', (req, res) => {
    res.render('index', { title: 'Ad Exchange for Publishers | Advertisers' });
});
module.exports = router;
