const express = require("express");

const { getUser } = require("../users/getUser");

const userRouter = express.Router();

userRouter.get('/1', getUser);

module.exports = {
    userRouter
}

