const mongoose = require('mongoose')

const Box = mongoose.model('Box', {
    _id:Number,
    user:String,
    name:String,
    price:String,
})
module.exports = Box





