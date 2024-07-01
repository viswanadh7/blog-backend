require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRouter");
const postRouter = require("./routes/postRouter");
const MONGO_URL = process.env.MONGO_URL;

const apiKeyAuth = (req, res, next) => {
    const apiKey = req.headers.authorization;
    if (!apiKey || apiKey !== `Bearer ${process.env.API_KEY}`) {
        return res.status(403).json({ error: "Unauthorized" });
    }
    next();
};
mongoose
    .connect(MONGO_URL)
    .then(() => console.log("DataBase connected"))
    .catch((error) => console.log(error.message));
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(apiKeyAuth);
//Routing
app.use(userRouter);
app.use(postRouter);
//
app.listen(8080, () => console.log("Running on 8080"));
