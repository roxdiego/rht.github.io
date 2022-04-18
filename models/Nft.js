const mongoose = require('mongoose')

const Ids = mongoose.model('Ids', {
    id: Number,
    name:String,
    item:String,
    rarity:String,
    powerOne:String,
    powerTwo:String,
    powerThree:String,
    text:String,
    image:String,
})
module.exports = Ids





