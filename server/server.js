const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv');
// get config vars
dotenv.config();

const app = express();

//disable cors on localhost
var corsOptions = {
    origin: "localhost",
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
};

const db = require("./models");
const {
    default: axios
} = require("axios");
db.sequelize.sync();

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({
    extended: true
}));

require("./routes/question.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});