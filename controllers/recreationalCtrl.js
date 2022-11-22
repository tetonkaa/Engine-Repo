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

module.exports = router;