const express = require('express')
const {
    createShortenId,
    redirectToUrl,
    getClicksToUrl,
} = require('../controller/urlController')


const router = express.Router()

router.post('/', createShortenId)
router.get('/:id', redirectToUrl)
router.get('/analytics/clicks/:id', getClicksToUrl)

module.exports = router