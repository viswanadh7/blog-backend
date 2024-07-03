const express = require("express");
const router = express.Router();
const userModel = require("../models/userSchema");
const bcrypt = require("bcrypt");
// router.get("/users", async (req, res) => {
//     const allUsers = await userModel.find();
//     res.json(allUsers);
// });
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    await userModel
        .findOne({ email: email })
        .then((user) => {
            if (user.password === password) {
                console.log("Matched");
                const sendingUser = {
                    id: user._id,
                    firstname: user.firstname,
                    profile_url: user.profile_url,
                };
                res.status(200).send(sendingUser);
            } else {
                res.status(404).send("Incorrect password. Please try again");
            }
        })
        .catch((error) => {
            res.status(404).send("User not found. Please create an account");
        });
});
router.get("/users/:id", async (req, res) => {
    const userById = await userModel.findById(req.params.id);
    const sendingUser = {
        id: userById._id,
        firstname: userById.firstname,
        profile_url: userById.profile_url,
    };
    res.json(sendingUser);
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
