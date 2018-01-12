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

astronauts.get('/:astronautID', function (req, res) {

    const astronautID = req.params.astronautID
    const i = astronautsDetails.findIndex(item => {return item.astronautID === astronautID})
    if (i==-1) res.sendStatus(404)
    else {
        res.status=200
        res.json(astronautsDetails[i])
    }
})

astronauts.put('/:astronautID', function (req, res) {

    const astronautID = req.params.astronautID
    const i = astronautsDetails.findIndex(item => {return item.astronautID === astronautID})
	
	console.log(req.body);
	
    astronautsDetails[i] = req.body
    res.json(astronautsDetails[i])
})

module.exports = astronauts