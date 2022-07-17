module.exports = (Sequelize, DataTypes) => {
    const Question = Sequelize.define('Question', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        question: {
            type: DataTypes.STRING
        },
        points: {
            type: DataTypes.NUMBER
        }
    }, {
        // indexes: [{
        //     unique: false,
        //     fields: ['name'],
        // }],
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: true,
        paranoid: true,
    })

    Question.sync()

    return Question
}