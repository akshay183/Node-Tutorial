const fs = require('fs');

function loggerReqRes(file) {

    return (req, res, next) => {

        fs.appendFile(

            `./${file}`,
            `${req.ip} - ${req.url} - ${Date.now()} \n`,
            (err, data) => {

                console.log("inside middleware");
                next() // this is imp else req would not get passed to next middleware/ app.
            })
    }
}

module.exports = {
    loggerReqRes,
}
