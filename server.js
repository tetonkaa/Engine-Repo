// Dependencies
const express = require('express');
const app = express();
const { default: mongoose } = require("mongoose");
const PassengerVehicle = require('./models/passengerVehicle');
const RecreationalVehicle = require('./models/recreationalVehicle.js');
const db =  require('./models')
const port = 3000

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


app.get('/', (req, res) => {
    // query passengerVehicles from the database
    db.PassengerVehicle.find({}, (err, passengerVehicles) => {
        // query log recreationalVehicles from the database
        db.RecreationalVehicle.find({}, (err, recreationalVehicles) => {
            // render `index.ejs` after data has been queried
            res.render('index', {
                passengerVehicles: passengerVehicles,
                recreationalVehicles: recreationalVehicles,
                tabTitle: 'Engine Repo'
            })
        })
    })
})

app.use('/passengerVehicles', passengerCtrl)
app.use('/recreationalVehicles', recreationalCtrl)

//Listener
//Binds and listens to connections on specified host and port
app.listen(port, () => {
    console.log(`App is running at localhost:${port}`)
})