const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    profile_url: String,
});
module.exports = mongoose.model("users", userSchema);
