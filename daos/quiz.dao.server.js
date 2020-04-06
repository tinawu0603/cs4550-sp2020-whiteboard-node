const quizModel = require('../models/quiz.model.server')

const findAllQuizzes = () =>
    quizModel.find().populate('questions')

const findQuizById = (qid) =>
    quizModel.findById(qid).populate('questions')

module.exports = {
    findAllQuizzes,
    findQuizById
}