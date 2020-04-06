const mongoose = require('mongoose')
const questionSchema = mongoose.Schema({
    title: {
        type: String,
        default: 'New Question'
    },
    question: {
        type: String,
        required: true
    },
    correct: String,
    type: {
        type: String,
        enum: ['TRUE_FALSE', 'MULTIPLE_CHOICE', 'ESSAY', 'FILL_BLANKS'],
    },
    choices: [String]
}, { collection: 'questions' })
module.exports = questionSchema