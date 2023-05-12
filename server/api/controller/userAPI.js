const passport = require("passport");
const userSchema = require("../models/user");
const bcrypt = require("bcryptjs");
const partsSchema = require("../models/partsSchema")
exports.registerUser = async (req, res) => {
    try {
        const username = req.body.username;
        const companyName = req.body.companyName;
        // const password = req.body.password
        const password = await bcrypt.hash(req.body.password, 10);
        const userType = req.body.userType;
        let doc = await userSchema.findOne({ username: username })
        if (!doc) {
            const user = new userSchema({
                companyName: companyName,
                username: username,
                password: password,
                userType: userType
            });
            await user.save();
            return res.status(200).json({ msg: "User Added SuccessFully" });

        } else if (doc) {
            return res.status(400).json({ msg: " User Already Exist" });
        }
    }
    catch (error) {
        throw error;
    }
};

exports.loginUser = (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) res.send({ status: "500", message: "Try Again Later" });
        else if (!user) return res.send({ status: "202", message: "wrong cred" });
        else {
            req.logIn(user, (err) => {
                if (err) throw err;
                res.send({ status: "200", message: "Autheticated " });
                console.log(req.user.fullName);
            });
        }
    })(req, res, next);
};

exports.filterParts = async (req, res, next) => {
    try {
        let doc = await partsSchema.find({
            age: { $lt: "1" },
            condition: "Used",
            manufacturer: "Gulfstream",
            material_Composition: "Titanium"
        })
        return res.status(200).json({ doc });
    }
    catch (error) {
        throw error;
    }
}