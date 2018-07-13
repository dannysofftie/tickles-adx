"use strict";
/**
 * author Danny Sofftie <dankim761@gmail.com> Mon 18th June 2018
 * all routes requesting advertiser data will be handled by this route
 */
const express_1 = require("express");
const utils_1 = require("../utils");
const router = express_1.Router();
router.post('/client-login', utils_1.advertiserLogin);
router.post('/client-signup', utils_1.advertiserSignUp);
router.get('/business-group-categories', utils_1.businessCategories);
module.exports = router;
