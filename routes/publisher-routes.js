"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const utils_1 = require("../utils");
const router = express_1.Router({ strict: true, caseSensitive: true });
router.post('/signup', utils_1.publisherSignUp);
router.post('/signin', utils_1.publisherSignIn);
router.post('*', (req, res) => {
    // error page
    res.end();
});
router.get('*', (req, res) => {
    // error page
    res.end();
});
module.exports = router;
