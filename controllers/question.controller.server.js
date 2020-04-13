const questionService = require('../services/question.service.server')

module.exports = function (app) {
    app.get('/api/quizzes/:qid/questions', (req, res) => {
        const qid = req.params['qid']
        res.send(questionService.findQuestionsForQuiz(qid))
    })
}