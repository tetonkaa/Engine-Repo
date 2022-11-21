const mongoose = require('mongoose');

const recreationalSchema = new mongoose.Schema({
    make: String,
    type: String,
    engineSize: String,
    style: String,
    description: String,
    img: String,
    color: String,
    price: Number
});

const RecreationalVehicle = mongoose.model('RecreationalVehicle', recreationalSchema);

module.exports = RecreationalVehicle;