const URL = require('../models/urlModel')
const ShortUniqueId = require('short-unique-id');


async function createShortenId(req, res) {

    const uid = new ShortUniqueId({ length: 10 });
    const shortenID = uid.rnd();

    const url = req.body.url

    const result = await URL.create({
        shortenID,
        url,
        visitedAt: []
    })

    return res.status(201).json(shortenID)
}

async function redirectToUrl(req, res) {

    const shortenID = req.params.id

    const urlBody = await URL.findOneAndUpdate({
        shortenID
    },
        {
            $push: {
                visitedAt: {
                    timestamps: Date.now(),
                }
            }
        })
    // console.log(urlBody);
    if (urlBody) {
        // Redirect to the URL if the document exists
        return res.redirect(urlBody.url);
    } else {
        // Handle the case where no document was found
        return res.status(404).send('URL not found');
    }
}

async function getClicksToUrl(req, res) {

    const shortenID = req.params.id
    const numOfClicks = await URL.findOne({
        shortenID,
    }).visitedAt.length

    return res.json(numOfClicks)
}

module.exports = {
    createShortenId,
    redirectToUrl,
    getClicksToUrl,
}