const express = require('express'),
    bodyParser = require('body-parser');
const astronauts = express.Router()

var uuid = require('uuid-v4');

const astronautsDetails = []

astronauts.put('/:astronautID', function (req, res) {

    const astronautID = req.params.astronautID
    const i = astronautsDetails.findIndex(item => {return item.astronautID === astronautID})
	
	console.log(req.body);
	
    astronautsDetails[i] = req.body
    res.json(astronautsDetails[i])
})

module.exports = astronauts