const express = require('express'),
    bodyParser = require('body-parser');
const astronauts = express.Router()

var uuid = require('uuid-v4');

const astronautsDetails = []


astronauts.get('/client', function (req, res) {
    res.sendfile("client.html");

})

// funzione che restituisce tutti gli astronauti e i loro dettagli
astronauts.get('/', function (req, res) {
    res.json(astronautsDetails)
})

// funzione con cui caricare un nuovo astronauta
astronauts.post('/', function (req, res) {
	
    const newAstronaut = req.body
    newAstronaut.ID = uuid()
    astronautsDetails.push(newAstronaut)
    res.json(newAstronaut)
})
