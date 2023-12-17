const mongoose = require('mongoose')


const urlSchema = new mongoose.Schema({
    shortenID: {
        type: String,
        required: true,
        unique: true
    },
    url: {
        type: String,
        required: true
    },
    visitedAt: [{
        timestamps: {
            type: Number
        }
    }]
},
    {
        timestamps: true
    })

const URL = mongoose.model('shortenUrl', urlSchema)

module.exports = URL