module.exports = (Sequelize, DataTypes) => {
    const Answer = Sequelize.define('Answer', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        title: {
            type: DataTypes.STRING
        }
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: false
    })

    Answer.sync()

    return Answer
}