const mongoose = require('mongoose');
require('dotenv').config();  // To load the .env file

const url = process.env.MONGODB_URL;

module.exports.connect = () => {
    mongoose.connect(url).then((res) => console.log('mongodb is connected successfully')).catch((err) => console.log(err));
}
