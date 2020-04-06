const quizService = require('../services/quiz.service.server')

module.exports = function (app) {
    // app.get('/api/quizzes', (req, res) =>
    //     quizService.findAllQuizzes()
    //         .then(quizzes => res.json(quizzes)))
    app.get('/api/quizzes', (req, res) => {
        res.send(quizService.findAllQuizzes())
    })

    app.get('/api/quizzes/:qid', (req, res) =>
        quizService.findQuizById(req.params['qid'])
            .then(quiz => {
                res.json(quiz)
            }))
}