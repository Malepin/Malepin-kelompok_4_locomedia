const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
    imagePath: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    sumber: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Article', articleSchema, 'articles')