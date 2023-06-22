const express = require("express");

const { handleSingleFile } = require("../files/fileHandlers");

const fileRouter = express.Router();
// add an item to cart
fileRouter.post('/', handleSingleFile);

module.exports = {
    fileRouter
}