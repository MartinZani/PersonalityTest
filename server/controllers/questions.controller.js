const db = require("../models");
const Question = db.Question;
const Answer = db.Answer;
const Op = db.Sequelize.Op;

// Get all questions and answers related to them
exports.getAll = async () => {

    // Save TheRequest in the database
    return await Question.findAll({
        where: {},
        include: {
            model: Answer,
            attributes: ['id', 'title']
        },
    });
};