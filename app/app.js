const express = require("express");
const userRouter = require("../routes/user.route");
const rootRouter = require("../routes/root.route");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", rootRouter);

app.use("/user", userRouter);

module.exports = app;
