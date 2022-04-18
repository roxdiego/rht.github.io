const mongoose = require('mongoose')

const Voucher = mongoose.model('Voucher', {
    _id: Number,
    user:String,
    price:String,
    priceRHT:String,
    max:Number,
    name:String, 
    item:String,
    rarity:String,
    image:String,
    powerOne:String,
    powerTwo:String,
    powerThree:String,
    text:String,
})
module.exports = Voucher





