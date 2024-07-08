const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
    userID: {
        type: String,
        required: true,
    },
    date: String,
    topic: String,
    image_url: String,
    heading: {
        type: String,
        required: true,
    },
    keywords: [String],
    description: String,
});
module.exports = mongoose.model("posts", postSchema);
