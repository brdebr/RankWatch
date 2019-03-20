const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const HeroSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: false
    },
    imgId: {
        type: Schema.Types.ObjectId,
        required: false
    },
    imageFilename:{
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Hero', HeroSchema);