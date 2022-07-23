module.exports = (Sequelize, DataTypes) => {
    const Question = Sequelize.define('Question', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        question: {
            type: DataTypes.STRING
        }
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: false
    })

    Question.sync()

    return Question
}