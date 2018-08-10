"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Pulishers = new mongoose_1.Schema({
    _id: {
        type: mongoose_1.Schema.Types.ObjectId
    },
    publisherEmail: {
        type: String,
        required: true
    },
    publisherAppUrl: {
        type: String,
        required: true
    },
    publisherPassword: {
        type: String,
        required: true
    },
    publisherDefaultWallet: {
        type: String,
        required: false
    }, walletAddress: {
        type: String,
        required: false
    },
    isAppUrlVerified: {
        type: Boolean,
        required: false,
        default: false
    },
    publisherSsid: {
        type: String,
        required: true
    },
    businessCategory: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'BusinessCategories',
        required: false
    },
    allowedMinimumBid: {
        type: Number,
        required: false,
        default: 0.0
    }
});
exports.default = mongoose_1.model('Publishers', Pulishers);
