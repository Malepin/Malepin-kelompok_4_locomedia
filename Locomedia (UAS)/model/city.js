const mongoose = require('mongoose')

const citiesSchema = mongoose.Schema({
    link: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Cities', citiesSchema, 'cities')