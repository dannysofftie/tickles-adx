import { Schema, model } from 'mongoose'

let Advertiser = new Schema({
    _id: Schema.Types.ObjectId,
    fullNames: {
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    ssid: {
        type: String,
        required: true
    },
    verificationCode: {
        type: String,
        required: true
    },
    verified: {
        type: Number,
        default: 0
    },
    joinedAs:{
        type: String,
        required: true
    },
    businessGroupTarget: {
        type: Schema.Types.ObjectId,
        ref: 'BusinessCategories'
    }
})

export default model('Advertiser', Advertiser)