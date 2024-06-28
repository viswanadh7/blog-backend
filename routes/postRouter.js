const express = require("express");
const postModel = require("../models/postSchema");
const router = express.Router();

router.get("/posts", async (req, res) => {
    const allPosts = await postModel.find();
    res.json(allPosts);
});
router.post("/posts", (req, res) => {
    const post = req.body;
    try {
        const newPost = postModel(post);
        newPost.save();
        res.sendStatus(200);
    } catch (error) {
        console.log(error.message);
    }
});
router.delete("/posts/:id", async (req, res) => {
    await postModel.findByIdAndDelete(req.params.id);
});
module.exports = router;
