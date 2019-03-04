const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const FileSchema = new Schema({
    relatedModel: {
        type: String,
        required: true
    },
    relatedId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    confirmed: {
        type: Boolean,
        required: true,
        default: false
    },
    uploadTime: {
        type: Date,
        required: true,
        default: Date.now
    },
    fieldname: {
        type: String,
        required: true
    },
    originalname: {
        type: String,
        required: true
    },
    encoding: {
        type: String,
        required: false
    },
    mimetype: {
        type: String,
        required: false
    },
    destination: {
        type: String,
        required: true
    },
    filename: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: false
    },
});

module.exports = mongoose.model('File', FileSchema);