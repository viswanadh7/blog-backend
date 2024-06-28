const express = require("express");
const router = express.Router();
const userModel = require("../models/userSchema");

router.get("/users", async (req, res) => {
    const allUsers = await userModel.find();
    res.json(allUsers);
});
router.get("/users/:id", async (req, res) => {
    const userById = await userModel.findById(req.params.id);
    res.json(userById);
});
router.post("/users", async (req, res) => {
    const user = req.body;
    try {
        const newUser = await userModel(user);
        newUser.save();
        res.sendStatus(200);
    } catch (error) {
        console.log(error.message);
    }
});
module.exports = router;
