const express = require('express'),
    bodyParser = require('body-parser');
const astronauts = express.Router()

var uuid = require('uuid-v4');

const astronautsDetails = []

astronauts.get('/client', function (req, res) {
    res.sendfile("client.html");

})

astronauts.get('/:astrinautsID', function (req, res) {

    const astrinautsID = req.params.astrinautsID
    const i = astronautsDetails.findIndex(item => {return item.astrinautsID === astrinautsID})
    if (i==-1) res.sendStatus(404)
    else {
        res.status=200
        res.json(astronautsDetails[i])
    }
})

module.exports = astronauts