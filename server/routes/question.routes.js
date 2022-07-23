let  questionController = require('../controllers/questions.controller');

module.exports = app => {

    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    })

    let router = require("express").Router();


    router.post("/all",  async (req, res) => {
        try {
            return res.json(await questionController.getAll());
        } catch (e) {
            return res.status(500).json({message: "Server error"}).send();
        }
    });

    app.use('/api/question', router);
}