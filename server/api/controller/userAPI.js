const passport = require("passport");
const userSchema = require("../models/user");
const bcrypt = require("bcryptjs");
const partsSchema = require("../models/partsSchema")
const recyclablePartsSchema = require("../models/recyclableParts")
const recycledPartsSchema = require("../models/recycledParts")
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
        // console.log(err);
        if (err) res.send({ status: "500", message: "Try Again Later" });
        else if (!user) return res.send({ status: "202", message: "wrong cred" });
        else {
            req.logIn(user, (err) => {
                if (err) throw err;
                res.send({ status: "200", message: "Autheticated " });
                // console.log(req.user.fullName);
            });
        }
    })(req, res, next);
};

exports.filterParts = async (req, res) => {
    const ages = req.params.age;
    const cfp = req.params.cfp;
    const lcs = req.params.lcs; ``
    const landfill = req.params.landfill;
    const water = req.params.water;
    // console.log(Number(ages));
    // console.log(Number(lcs));
    // console.log(Number(landfill));
    // console.log(Number(water));
    try {
        let doc = await partsSchema.find({
            // $age: { $gt: "0" }
            $and: [
                { $expr: { $lt: [{ $toInt: "$age" }, Number(ages)] } },
                { $expr: { $lt: [{ $toInt: "$carbon_footprint_saved" }, Number(cfp)] } },
                { $expr: { $lt: [{ $toInt: "$carbon_footprint_saved" }, Number(lcs)] } },
                { $expr: { $lt: [{ $toInt: "$carbon_footprint_saved" }, Number(landfill)] } },
                { $expr: { $lt: [{ $toInt: "$carbon_footprint_saved" }, Number(water)] } }
            ]
        }).limit(100)
            .exec()
        // console.log(doc);
        return res.status(200).json(doc);
    }
    catch (error) {
        throw error;
    }
}
exports.filterParts2 = async (req, res) => {
    const ages = req.params.age;
    const cfp = req.params.cfp;
    const lcs = req.params.lcs; ``
    const landfill = req.params.landfill;
    const water = req.params.water;
    // console.log(Number(ages));
    // console.log(Number(lcs));
    // console.log(Number(landfill));
    // console.log(Number(water));
    try {
        let doc = await partsSchema.find({
            // $age: { $gt: "0" }
            $and: [
                { condition: "New" },
                { $expr: { $lt: [{ $toInt: "$age" }, Number(ages)] } },
                { $expr: { $lt: [{ $toInt: "$carbon_footprint_saved" }, Number(cfp)] } },
                { $expr: { $lt: [{ $toInt: "$carbon_footprint_saved" }, Number(lcs)] } },
                { $expr: { $lt: [{ $toInt: "$carbon_footprint_saved" }, Number(landfill)] } },
                { $expr: { $lt: [{ $toInt: "$carbon_footprint_saved" }, Number(water)] } }
            ]
        }).limit(100)
            .exec()
        // console.log(doc);
        return res.status(200).json(doc);
    }
    catch (error) {
        throw error;
    }
}
exports.filterParts3 = async (req, res) => {
    const ages = req.params.age;
    const cfp = req.params.cfp;
    const lcs = req.params.lcs; ``
    const landfill = req.params.landfill;
    const water = req.params.water;
    // console.log(Number(ages));
    // console.log(Number(lcs));
    // console.log(Number(landfill));
    // console.log(Number(water));
    try {
        let doc = await recyclablePartsSchema.find({
            // $age: { $gt: "0" }
            $and: [
                // { condition: "New" },
                { $expr: { $lt: [{ $toInt: "$age" }, Number(ages)] } },
                { $expr: { $lt: [{ $toInt: "$carbon_footprint_saved" }, Number(cfp)] } },
                { $expr: { $lt: [{ $toInt: "$carbon_footprint_saved" }, Number(lcs)] } },
                { $expr: { $lt: [{ $toInt: "$carbon_footprint_saved" }, Number(landfill)] } },
                { $expr: { $lt: [{ $toInt: "$carbon_footprint_saved" }, Number(water)] } }
            ]
        }).limit(100)
            .exec()
        // console.log(doc);
        return res.status(200).json(doc);
    }
    catch (error) {
        throw error;
    }
}

exports.manufacturerList = async (req, res) => {
    const vari = req.params.vari;

    const r = "$" + vari;
    console.log(r);
    // const var=req.params.var ;
    try {
        const result = await partsSchema.aggregate([
            {
                $group: {
                    _id: null,
                    sum: { $sum: { $toInt: r } },
                },
            },
        ]);

        if (result.length > 0) {
            const sum = result[0].sum;
            res.status(200).json(sum)
        } else {
            console.log('No data found');
        }
    } catch (error) {
        console.error('Error:', error);
    }
};
// }
exports.sendRecycle = async (req, res, next) => {
    try {
        const data = req.body;
        console.log(data);
        data.forEach(async (i) => {

            const document = await partsSchema.findOne({ _id: i });
            if (!document) {
                console.log("Not Found");
            }
            console.log(i);
            console.log(document);
            // partsSchema.deleteOne({ _id: i });


            const recyclableProduct = new recyclablePartsSchema({
                part: document.part,
                material_Composition: document.material_Composition,
                age: document.age,
                condition: document.condition,
                location: document.location,
                manufacturer: document.manufacturer,
                aircraft_model: document.aircraft_model,
                potential_use_cases: document.potential_use_cases,
                recycled_parts_carbon_footprint: document.recycled_parts_carbon_footprint,
                water_usage_new_parts: document.water_usage_new_parts,
                energy_consumption_new_parts: document.energy_consumption_new_parts,
                energy_consumption_recycled_parts: document.energy_consumption_recycled_parts,
                recycling_rate: document.recycling_rate,
                toxicity_score_new_parts: document.toxicity_score_new_parts,
                toxicity_score_recycled_parts: document.toxicity_score_recycled_parts,
                remanufacturing_potential: document.remanufacturing_potential,
                life_cycle_assessment: document.life_cycle_assessment,
                renewable_material_content: document.renewable_material_content,
                carbon_footprint_saved: document.carbon_footprint_saved,
                water_usage_saved: document.water_usage_saved,
                unique_id: document.unique_id,
                source: "Manufacturer"
            });
            await recyclableProduct.save();
        });

        return res.status(200).json({ msg: "Send For Recycling" });
    }

    catch (error) {
        throw error;
    }
};

exports.sendRecycle2 = async (req, res, next) => {
    try {
        const data = req.body;
        console.log(data);
        data.forEach(async (i) => {

            const document = await partsSchema.findOne({ _id: i });
            if (!document) {
                console.log("Not Found");
            }
            console.log(i);
            console.log(document);


            // partsSchema.deleteOne({ _id: i });

            const recyclableProduct = new recyclablePartsSchema({
                part: document.part,
                material_Composition: document.material_Composition,
                age: document.age,
                condition: document.condition,
                location: document.location,
                manufacturer: document.manufacturer,
                aircraft_model: document.aircraft_model,
                potential_use_cases: document.potential_use_cases,
                recycled_parts_carbon_footprint: document.recycled_parts_carbon_footprint,
                water_usage_new_parts: document.water_usage_new_parts,
                energy_consumption_new_parts: document.energy_consumption_new_parts,
                energy_consumption_recycled_parts: document.energy_consumption_recycled_parts,
                recycling_rate: document.recycling_rate,
                toxicity_score_new_parts: document.toxicity_score_new_parts,
                toxicity_score_recycled_parts: document.toxicity_score_recycled_parts,
                remanufacturing_potential: document.remanufacturing_potential,
                life_cycle_assessment: document.life_cycle_assessment,
                renewable_material_content: document.renewable_material_content,
                carbon_footprint_saved: document.carbon_footprint_saved,
                water_usage_saved: document.water_usage_saved,
                source: "Airline",
                unique_id: document.unique_id
            });
            await recyclableProduct.save();
        });
        return res.status(200).json({ msg: "Send For Recycling" });
    }
    catch (error) {
        throw error;
    }
};
exports.sendRecycle3 = async (req, res, next) => {
    try {
        const data = req.body;
        console.log(data);
        data.forEach(async (i) => {

            console.log(i);
            const document = await recyclablePartsSchema.findOne({
                _id: i
            });
            if (!document) {
                console.log("Not Found");
            }
            console.log(document);

            // recyclablePartsSchema.deleteOnea({ _id: i });


            const recycledProduct = new recycledPartsSchema({
                part: document.part,
                material_Composition: document.material_Composition,
                age: document.age,
                condition: document.condition,
                location: document.location,
                manufacturer: document.manufacturer,
                aircraft_model: document.aircraft_model,
                potential_use_cases: document.potential_use_cases,
                recycled_parts_carbon_footprint: document.recycled_parts_carbon_footprint,
                water_usage_new_parts: document.water_usage_new_parts,
                energy_consumption_new_parts: document.energy_consumption_new_parts,
                energy_consumption_recycled_parts: document.energy_consumption_recycled_parts,
                recycling_rate: document.recycling_rate,
                toxicity_score_new_parts: document.toxicity_score_new_parts,
                toxicity_score_recycled_parts: document.toxicity_score_recycled_parts,
                remanufacturing_potential: document.remanufacturing_potential,
                life_cycle_assessment: document.life_cycle_assessment,
                renewable_material_content: document.renewable_material_content,
                carbon_footprint_saved: document.carbon_footprint_saved,
                water_usage_saved: document.water_usage_saved,
            });
            await recycledProduct.save();
        });
        return res.status(200).json({ msg: "Recycled Successfully" });
    }
    catch (error) {
        throw error;
    }
};

exports.userDetails = (req, res) => {
    res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
    console.log(req.user);
};
exports.logout = (req, res, nect) => {
    req.logout(function (err) {
        if (err) { return next(err); }
        else {
            res.status(200).json({ msg: "Logged Out" })
        }
    });
};
// exports.userDetails = (req, res) => {
//     req.logout(); // Passport's logout function
//     // Redirect the user to the home page or any other desired page;
// };



