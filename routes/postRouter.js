const express = require("express");
const postModel = require("../models/postSchema");
const userModel = require("../models/userSchema");
const router = express.Router();

router.get("/posts", async (req, res) => {
    const allPosts = await postModel.find();
    res.json(allPosts);
});
router.get("/posts/:id", async (req, res) => {
    try {
        const blog = await postModel.findById(req.params.id);
        res.send(blog);
    } catch (error) {
        res.sendStatus(400);
    }
});
router.post("/posts", (req, res) => {
    const post = req.body;
    try {
        const newPost = postModel(post);
        newPost.save();
        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(400);
        // console.log(error.message);
    }
});
router.put("/posts/:id", async (req, res) => {
    try {
        const updatedUser = req.body;
        await postModel.findByIdAndUpdate(req.params.id, updatedUser);
        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(400);
    }
});
router.delete("/posts/:id", async (req, res) => {
    try {
        await postModel.findByIdAndDelete(req.params.id);
        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(400);
    }
});
module.exports = router;
