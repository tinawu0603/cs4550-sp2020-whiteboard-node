// const questionDao = require('../daos/question.dao.server')
// const quizDao = require('../daos/quiz.dao.server')

// findAllQuestions = () =>
//     questionDao.findAllQuestions()

// findQuestionById = (qid) =>
//     questionDao.findQuestionById(qid)

// findQuestionsForQuiz = (qid) =>
//     quizDao.findQuizById(qid)
//         .then(quiz => quiz.questions)

let questions = require('./questions')
findQuestionsForQuiz = (qid) =>
    questions.filter(question => question.quizId === qid)

module.exports = {
    // findAllQuestions,
    // findQuestionById,
    findQuestionsForQuiz
}