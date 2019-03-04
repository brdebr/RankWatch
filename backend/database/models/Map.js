const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const MapSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    imgURL: {
        type: String,
        required: false
    },
    typeImgURL: {
        type: String,
        required: false
    },
});

module.exports = mongoose.model('Map', MapSchema);