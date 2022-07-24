module.exports = (Sequelize, DataTypes) => {
    const Result = Sequelize.define('Result', {
        type: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING
        },
        message: {
            type: DataTypes.TEXT
        }
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: false
    })

    Result.sync()

    return Result
}