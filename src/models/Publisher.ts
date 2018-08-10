import { Schema, model } from 'mongoose'

const Pulishers = new Schema({
    _id: {
        type: Schema.Types.ObjectId
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
        type: Schema.Types.ObjectId,
        ref: 'BusinessCategories',
        required: false
    },
    allowedMinimumBid: {
        type: Number,
        required: false,
        default: 0.0
    }
})

export default model('Publishers', Pulishers)