const express = require("express");


const { addShare } = require("./addShare");

const shareRouter = express.Router();
// add an item to cart
shareRouter.post('/', addShare);

module.exports = {
    shareRouter
}