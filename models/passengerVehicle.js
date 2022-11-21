const mongoose = require('mongoose');

const passengerSchema = new mongoose.Schema({
    make: String,
    model: String,
    description: String,
    img: String,
    color: String,
    price: Number
});

// Passenger Vehicle Model
const PassengerVehicle = mongoose.model('PassengerVehicle', passengerSchema);

// Exporting Passenger Vehicle Model
module.exports = PassengerVehicle;