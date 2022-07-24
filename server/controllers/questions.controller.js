const db = require("../models");
const Question = db.Question;
const Answer = db.Answer;
const Point = db.Point;
const Result = db.Result;
const Op = db.Sequelize.Op;

// Get all questions and answers related to them
exports.getAll = async () => {

    return await Question.findAll({
        where: {},
        include: {
            model: Answer,
            attributes: ['id', 'title']
        },
    });
};

// get all points for selected questions
exports.fetchPoints = async (questionAnswersObj) => {

    let arr = questionAnswersObj.map((value) => {
        let [QuestionId, id] = Object.entries(value)[0];
        return Object.assign({id, QuestionId});
    })

    return await Answer.findAll({
        where: {
            [Op.or]: arr
        },
        attributes: ['id'],
        include: {
            model: Point,
            attributes: ['points']
        },
    });
};

// fetch the result
exports.getResults = async (type) => {

    return await Result.findByPk(type);
};