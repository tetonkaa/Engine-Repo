//dependencies
const express = require('express');
const db = require("../models")
const router = express.Router();




// New route
router.get('/new', (req, res) => {
    res.render('new.ejs', {
        tabTitle: "New Listing"
    })
})

// Post route
router.post('/', (req, res) => {
    if (req.body.visited) {
        req.body.visited = true
    } else {
        req.body.visited = false
    }
    db.PassengerVehicle.create(req.body, (err, passengerVehicle) => {
        res.redirect('/passengerVehicle/' + passengerVehicle._id)
        
    })
})

//show route for passenger vehicles
router.get('/:id', (req, res) => {
    db.PassengerVehicle.findById(req.params.id, (err, foundPassengerVehicle) => {
        res.render('show.ejs', {
            passengerVehicle: foundPassengerVehicle,
            index: req.params.id,
            tabTitle: foundPassengerVehicle.model
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
        res.redirect('/passengerVehicle/' + req.params.id)
    })
})


module.exports = router;


