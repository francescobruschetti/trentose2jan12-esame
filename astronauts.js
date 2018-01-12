const express = require('express'),
    bodyParser = require('body-parser');
const astronauts = express.Router()

var uuid = require('uuid-v4');

const astronautsDetails = []


astronauts.get('/', function (req, res) {
    res.json(astronautsDetails)
})

astronauts.post('/', function (req, res) {
	
    const newAstronaut = req.body
    newAstronaut.astronautID = uuid()
    astronautsDetails.push(newAstronaut)
    res.json(newAstronaut)
})

module.exports = astronauts