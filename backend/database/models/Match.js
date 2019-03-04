const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const TagSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
});

const HeroSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
});

const PlayerSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    team: {
        type: Number,
        required: true
    },
    comments: {
        type: [String],
        required: false
    },
    heroes: {
        type: [HeroSchema],
        required: false
    }
});

const RoundSchema = new Schema({
    order: {
        type: Number,
        required: true
    },
    points: {
        type: [String],
        required: true
    },
    side: {
        type: String,
        required: true
    },
    timebank: {
        type: Number,
        required: false
    },
    result: {
        type: Number,
        required: true
    },
    players: [PlayerSchema]
});

const MatchSchema = new Schema({
    sr: {
        type: Number,
        required: true
    },
    order: {
        type: Number,
        required: true
    },
    result: {
        type: Number,
        required: true
    },
    variance: {
        type: Number,
        required: true
    },
    datetime: {
        type: Date,
        required: true
    },
    season: {
        type: String,
        required: true
    },
    tags: {
        type: [TagSchema],
        required: false
    },
    map: {
        type: Schema.Types.ObjectId,
        required: true
    },
    rounds: {
        type: [RoundSchema],
        required: true
    }
});


module.exports = mongoose.model('Match', MatchSchema);