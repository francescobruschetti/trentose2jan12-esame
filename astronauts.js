const express = require('express'),
    bodyParser = require('body-parser');
const astronauts = express.Router()

var uuid = require('uuid-v4');

const astronautsDetails = []

astronauts.get('/client', function (req, res) {
    res.sendfile("client.html");

})


module.exports = astronauts