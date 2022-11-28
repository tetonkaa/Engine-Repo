// Dependencies
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const { default: mongoose } = require("mongoose");
require('dotenv').config()
const port = process.env.PORT

//Acess Models

const db =  require('./models')

//access Controllers
const passengerCtrl = require('./controllers/passengerCtrl.js')
const recreationalCtrl = require('./controllers/recreationalCtrl')

// Database Connection
// mongoose.connect(process.env.DATABASE_URL, {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true
// });



// Middleware
// add ejs view engine, add POST requests, add access to req.body
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
//app.set('view engine', 'ejs')


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//Routes


app.get('/', (req, res) => {
    // query passengerVehicles from the database
    db.PassengerVehicle.find({}, (err, allPassengerVehicles) => {
        // query log recreationalVehicles from the database
        db.RecreationalVehicle.find({}, (err, allRecreationalVehicles) => {
            // render `index.ejs` after data has been queried
            res.render('index.ejs', {
                passengerVehicles: allPassengerVehicles,
                recreationalVehicles: allRecreationalVehicles,
                tabTitle: 'Engine Repo'
            })
        })
    })
})

app.use('/passengerVehicle', require('./controllers/passengerCtrl'));
app.use('/recreationalVehicle', require('./controllers/recreationalCtrl'));

//Listener
//Binds and listens to connections on specified host and port
app.listen(port, () => {
    console.log(`App is running at localhost:${port}`)
})
