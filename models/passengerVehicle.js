const mongoose = require('mongoose');

const passengerSchema = new mongoose.Schema({
    make: String,
    model: String,
    description: String,
    img: String,
    color: String,
    price: Number
});

const PassengerVehicle = mongoose.model('PassengerVehicle', passengerSchema);

module.exports = PassengerVehicle;