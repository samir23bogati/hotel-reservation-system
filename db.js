const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://samir2323:passw0rd23@cluster0.08vhdnq.mongodb.net/mern-rooms'

mongoose.connect(mongoURL , {useUnifiedTopology : true , useNewUrlParser:true})

var connection =mongoose.connection
connection.on('error' , ()=> {
    console.log('Mongo DB Connection Failed')
})
connection.on('connected' , ()=> {
    console.log('Mongo DB Connection Successful')
})
module.exports = mongoose