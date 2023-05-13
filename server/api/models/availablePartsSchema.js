const mongoose = require("mongoose");

const availablePartsSchema = mongoose.Schema(
    {
        unique_id: {
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model("availbaleParts", availablePartsSchema);
