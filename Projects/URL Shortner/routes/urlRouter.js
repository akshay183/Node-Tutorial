const express = require('express')
const {
    createShortenId,
    redirectToUrl,
    getClicksToUrl,
} = require('../controller/urlController')


const router = express.Router()

router
    .post('/', createShortenId)
    .get('/:id', redirectToUrl)
    .get('/analytics/clicks/:id', getClicksToUrl)

module.exports = router