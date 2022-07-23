module.exports = (Sequelize, DataTypes) => {
    const Point = Sequelize.define('Point', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        points: {
            type: DataTypes.INTEGER
        }
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: false
    })

    Point.sync()

    return Point
}