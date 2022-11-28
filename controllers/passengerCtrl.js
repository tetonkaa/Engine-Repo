//dependencies
const express = require('express');
const db = require("../models")
const router = express.Router();



// Post route
router.post('/', (req, res) => {
    db.PassengerVehicle.create(req.body, (err, passengerVehicle) => {
        //redirects it to home page after created
        res.redirect('/') 
    })
})

// New route
router.get('/new', (req, res) => {
    res.render('new.ejs', {
        tabTitle: "New Listing"
    })
})


//show route for passenger vehicles
router.get('/show/:id', (req, res) => {
    db.PassengerVehicle.findById(req.params.id, (err, foundPassengerVehicle) => {
        res.render("show.ejs", {
            passengerVehicle: foundPassengerVehicle,
            index: req.params.id,
                    })
    })
});

//delete route
router.delete('/:id', (req, res) => {

    db.PassengerVehicle.findByIdAndRemove(req.params.id, (err, foundPassengerVehicle) => {
        res.redirect('/')
    })
})

//Edit Route
router.get('/:id/edit', (req, res) => {
    db.PassengerVehicle.findById(req.params.id, (err, foundPassengerVehicle) => {
        res.render("editPassenger.ejs", {
            passengerVehicle: foundPassengerVehicle,
            index: req.params.id,
            tabTitle: "Edit"
        })
    })
})

router.put('/:id', (req, res) => {
    db.PassengerVehicle.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, foundPassengerVehicle) => {
        res.redirect('/')
    })
})


module.exports = router;


