require('dotenv').config();

module.exports = {
    MONGODB_USER: process.env.DB_USER,
    MONGODB_PASS: process.env.DB_PASS,
};