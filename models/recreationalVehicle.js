const mongoose = require('mongoose');

const recreationalSchema = new mongoose.Schema({
    make: String,
    type: String,
    engineSize: String,
    name: String,
    description: String,
    img: String,
    color: String,
    price: Number
});
// Recreational Vehicle Model
const RecreationalVehicle = mongoose.model('RecreationalVehicle', recreationalSchema);

// Exporting Recreational Vehicle Model
module.exports = RecreationalVehicle;