const express = require("express");

const { handleSingleFile, handleMultipleFiles } = require("../files/fileHandlers");

const fileRouter = express.Router();
// add an item to cart
fileRouter.post('/file', handleSingleFile);
// add an item to cart
fileRouter.post('/files', handleMultipleFiles);

module.exports = {
    fileRouter
}