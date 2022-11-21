// Dependencies
const express = require('express');
const app = express();

const { default: mongoose } = require("mongoose");
const PassengerVehicle = require('./models/passengerVehicle');
const RecreationalVehicle = require('./models/recreationalVehicle.js');





// Middleware
// Body parser middleware: give us access to req.body
app.use(express.static('style'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));


