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
    make: 'Wayne Corp',
    model: 'The Batmobile',
    description: 'Patrol the streets in style (also has an ejector seat).',
    img: 'https://thedirect.s3.amazonaws.com/media/photos/batmobi.jpg',
    color: 'Black',
    price: 500000
},
{
    make: 'Mercedes',
    model: 'E63 AMG',
    description: 'Mercedes-Benz E Cass E 63 S AMG® 4MATIC® Sedan in Silver offers tremendous comfort, style, and performance.',
    img: 'https://media.ed.edmunds-media.com/mercedes-benz/e-class/2015/oem/2015_mercedes-benz_e-class_sedan_e63-amg-4matic-s-model_fq_oem_3_1600x1067.jpg',
    color: 'Silver',
    price: 50000
},
{
    make: 'Toyota',
    model: 'Tacoma',
    description: 'Reliable truck thatll take you to whatever destination you need.',
    img: 'https://bringatrailer.com/wp-content/uploads/2017/09/59e127aed8b62_IMG_1592-1.jpg?fit=940%2C649',
    color: 'Silver',
    price: 15000
},]


const recreationalVeh = [
    {
    make: 'Honda',
    type: 'Motorcycle',
    engineSize: '998cc',
    name: 'cbr1000',
    description: 'Quick responsive clutch, DOHC four-cylinder engine, agile enough to weave through traffic. ',
    img: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/132789487_1728404687342385_7954500342135602202_n.jpg?stp=dst-jpg_s640x640&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=sQscyHKIBsEAX_USFig&_nc_ht=scontent-dfw5-2.xx&oh=00_AfD1mQWdtcOyOi4z3O8NKGIFp04I9i2PX-lp72Zxnc3W-A&oe=63A619CB',
    color: 'Black',
    price: '11000',
},
{
    make: 'Cadillac',
    type: 'Tank',
    engineSize: '220hp',
    name: 'M24 Chaffee',
    description: 'I mean, its a tank! ',
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/89/M24_Chaffee_33314_4CV_pic07.JPG',
    color: 'Olive',
    price: '120000',
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

