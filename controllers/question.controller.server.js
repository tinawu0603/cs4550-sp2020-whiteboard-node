const questionService = require('../services/question.service.server')

module.exports = function (app) {
    app.get('/api/quizzes/:qid/questions', (req, res) => {
        const qid = req.params['qid']
        questionService.findQuestionsForQuiz(qid)
            .then(questions => res.json(questions))
    })
}