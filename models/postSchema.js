const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
    userID: String,
    date: String,
    topic: String,
    image_url: String,
    heading: String,
    description: String,
});
module.exports = mongoose.model("posts", postSchema);
