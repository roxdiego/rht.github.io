const mongoose = require('mongoose')

const User = mongoose.model('User', {
    _id: Number,
    name: String,
    image: String,
})
module.exports = User





