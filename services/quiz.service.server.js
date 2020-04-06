// const quizDao = require('../daos/quiz.dao.server')

// findAllQuizzes = () => quizDao.findAllQuizzes()
// findQuizById = (qid) => quizDao.findQuizById(qid)

let quizzes = require('./quizzes')
const findAllQuizzes = () => quizzes
const findQuizById = (qid) =>
    quizzes.find(quiz => quiz._id === qid)

module.exports = {
    findAllQuizzes,
    findQuizById
}