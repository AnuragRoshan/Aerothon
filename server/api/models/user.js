const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        companyName: { type: String, required: true },
        username: {
            type: String,
            required: true,
            unique: true,
            match:
                /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        },
        password: { type: String, required: true },
        userType: { type: String, required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
