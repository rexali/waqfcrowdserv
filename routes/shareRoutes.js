const express = require("express");


const { addShare } = require("../shares/addShare");

const shareRouter = express.Router();
// add an item to cart
shareRouter.post('/', addShare);

module.exports = {
    shareRouter
}