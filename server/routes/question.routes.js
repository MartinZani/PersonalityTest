const {
    default: axios
} = require("axios")

const db = require("../models")
const sequelize = db.Sequelize;
const Op = db.Sequelize.Op

module.exports = app => {

    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        )
        next()
    })

    let router = require("express").Router()


    router.post("/",  async (req, res) => {
        let userId = req.body.userId
        try {
            return res.json({message: "Success"})
        } catch (e) {
            db.Log.create({user: userId, errorObject: JSON.stringify(e), routePath: "/api/main/testFatura"})
            return res.status(500).json({message: "Server error"}).send()
        }
    })

    app.use('/api/question', router)
}