const express = require("express")
const cors = require("cors");
const passport = require("passport");
const cookieParser = require("cookie-parser");
// const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const dotenv = require("dotenv")
const routes = require("./api/routes/index")
const router = require("express").Router();
dotenv.config();


app.use(morgan("dev"));


//database connection
require("./db_connection");


// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    cors({
        origin: "http://localhost:3000", // <-- location of the react app were connecting to
        credentials: true,
    })
);
app.use(
    session({
        secret: "secretcode",
        resave: true,
        saveUninitialized: true,
        cookie: { secure: false, maxAge: 60 * 60 * 1000, prioroty: "Low" }
    })
);
app.use(cookieParser(process.env.SECRET));
app.use(passport.initialize());
app.use(passport.session());
require("./config/passportConfig")(passport);


//Middleware End

//Route

app.use(routes);




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server Is Connected to Port " + PORT);
})