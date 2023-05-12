const mongoose = require("mongoose")

require("dotenv").config();

// mongoose.set("strictQuery", false);
const URL = process.env.DB_URL
try {

    mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log("Connected To Database");

} catch (error) {

    console.log("error while loadind the data base", error);

}