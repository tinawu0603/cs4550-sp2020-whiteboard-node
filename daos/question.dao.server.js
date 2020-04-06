const questionModel = require('../models/question.model.server')

findAllQuestions = () =>
    questionModel.find()

findQuestionById = (qid) =>
    questionModel.findById(qid)

module.exports = {
    findAllQuestions,
    findQuestionById
}