//dependencies
const express = require('express');
const db = require("../models")
const router = express.Router();

router.get('/new', (req, res) => {
    res.render('new.ejs', {
        tabTitle: "New Listing"
    })
})

router.post('/', (req, res) => {
    if (req.body.visited) {
        req.body.visited = true
    } else {
        req.body.visited = false
    }
    db.recreationalVehicle.create(req.body, (err, recreationalVehicle) => {
        res.redirect('/recreationalVehicle/' + recreationalVehicle._id)
        
    })
})

//show route for recreational vehicles
router.get('/show/:id', (req, res) => {
    db.RecreationalVehicle.findById(req.params.id, (err, foundRecreationalVehicle) => {
        res.render("recShow.ejs", {
            recreationalVehicle: foundRecreationalVehicle,
            index: req.params.id,
            tabTitle: foundRecreationalVehicle.name
        })
    })
});

module.exports = router;