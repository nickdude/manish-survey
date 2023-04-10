const mongoose = require('mongoose')
const Schema = mongoose.Schema

const list = new Schema({
    question: {
        type: String
    },
    rating: {
        type: Number,
        default: null
    },
    description: {
        type: String,
        default: null
    }
})

const Session = new Schema ({
    surveyList: {
        type: [list]
    }
})


module.exports = mongoose.model('Session', Session, 'Session')