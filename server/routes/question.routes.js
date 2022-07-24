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


    router.post("/submit",  async (req, res) => {
        let questionAnswersObj = req?.body?.questionAnswersObj
        try {
            let r = await questionController.fetchPoints(questionAnswersObj);
            let total = r.reduce((currentSum, el) => currentSum + el.Point.points, 0)

            let result = {}

            switch (true) {
                case total < ((questionAnswersObj.length * 4) / 3):
                    result = await questionController.getResults('introvert_extrovert_text_result_introvert')
                    break;

                case total >= ((questionAnswersObj.length * 4) / 3) && total <= ((questionAnswersObj.length * 4) / 3) * 2:
                    result = await questionController.getResults('introvert_extrovert_text_result_public_introvert_private_extrovert')
                    break;

                case total > ((questionAnswersObj.length * 4) / 3) * 2:
                    result = await questionController.getResults('introvert_extrovert_text_result_extrovert')
                    break;
            }
            
            return res.json({title: result.title, message: result.message, r});
        } catch (e) {
            return res.status(500).json({message: "Server error"}).send();
        }
    });

    app.use('/api/question', router);
}