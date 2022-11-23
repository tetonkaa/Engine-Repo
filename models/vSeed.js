const db = require('./')

const passengerVeh = [
    {
    make: 'Porsche',
    model: '911',
    description: 'Fast, stylish, can outrun police vehicles.',
    img: 'https://i.imgur.com/HSZbCVW.jpg',
    color: 'Red',
    price: 106100
},
{
    make: 'The Batmobile',
    model: '911',
    description: 'Patrol the streets in style (also has an ejector seat).',
    img: 'https://thedirect.s3.amazonaws.com/media/photos/batmobi.jpg',
    color: 'Black',
    price: 500000
}]


const recreationalVeh = [
    {
    make: 'Honda',
    type: 'Motorcycle',
    engineSize: '998cc',
    name: 'cbr1000',
    description: 'Quick responsive clutch, DOHC four-cylinder engine, agile enough to weave through traffic. ',
    img: 'https://powersports.honda.com/motorcycle/sport/-/media/products/family/cb1000r/trims/trim-main/cb1000r-black-edition/2022/2022-cb1000r-black-edition-graphite_black-650x380.png',
    color: 'Black',
    price: '11000',
}]


db.PassengerVehicle.deleteMany({}, (err, passengerVehicles) => {
    if (err) {
        console.log('Error occured in remove', err)
    } else {
        console.log('Removed all locations')

        db.PassengerVehicle.insertMany(passengerVeh, (err, ) => {
            if (err) {
                console.log('Error occured in insertMany', err)
            } else {
                console.log('Created', passengerVehicles.length, "passenger vehicles")
            }
        })
    }
})

db.RecreationalVehicle.deleteMany({}, (err, recreationalVehicles) => {
    if (err) {
        console.log('Error occured in remove', err)
    } else {
        console.log('Removed all locations')

        db.RecreationalVehicle.insertMany(recreationalVeh, (err, ) => {
            if (err) {
                console.log('Error occured in insertMany', err)
            } else {
                console.log('Created', recreationalVehicles.length, "passenger vehicles")
            }
        })
    }
})

