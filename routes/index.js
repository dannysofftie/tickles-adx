"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
// @ts-ignore
router.get('/', (req, res) => {
    res.render('index.html', { title: 'Hey', message: 'Hello there!' });
});
module.exports = router;
