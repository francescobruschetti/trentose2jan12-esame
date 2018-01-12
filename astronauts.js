const express = require('express'),
    bodyParser = require('body-parser');
const astronauts = express.Router()

var uuid = require('uuid-v4');

const astronautsDetails = []

astronauts.get('/client', function (req, res) {
    res.sendfile("client.html");

})

astronauts.get('/', function (req, res) {
    res.json(astronautsDetails)
})

astronauts.post('/', function (req, res) {
	
	console.log(req.body.firstName)
    const newAstronaut = req.body
    newAstronaut.ID = uuid()
    astronautsDetails.push(newAstronaut)
    res.json(newAstronaut)
})

module.exports = astronauts