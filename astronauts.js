const express = require('express'),
    bodyParser = require('body-parser');
const astronauts = express.Router()

var uuid = require('uuid-v4');

const astronautsDetails = []

astronauts.get('/:astronautsID', function (req, res) {

    const astronautsID = req.params.astronautsID
    const i = astronautsDetails.findIndex(item => {return item.astronautsID === astronautsID})
    if (i==-1) res.sendStatus(404)
    else {
        res.status=200
        res.json(astronautsDetails[i])
    }
})

module.exports = astronauts