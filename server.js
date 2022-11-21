// Dependencies
const express = require('express');
const app = express();

const { default: mongoose } = require("mongoose");
const PassengerVehicle = require('./models/passengerVehicle');
const RecreationalVehicle = require('./models/recreationalVehicle.js');

// Database Connection
mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});



// Middleware
// add ejs view engine, add POST requests, add access to req.body
app.use(express.static('style'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));

//Routes
//Routes for all applicable controllers.
app.use('/', passengerCtrl)


//Listener
//Binds and listens to connections on specified host and port
app.listen(port, () => {
    console.log(`App is running at localhost:${port}`)
})