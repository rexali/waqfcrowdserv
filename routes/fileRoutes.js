const express = require("express");

const { addFile } = require("../files/addFile");
const { addFiles } = require("../files/addFiles");
const { removeFile } = require("../files/removeFile");
const { updateWaqfs } = require("../waqfs/updateWaqfs");

const fileRouter = express.Router();
// add an item to cart
fileRouter.post('/file', addFile);
// add an item to cart
fileRouter.post('/files', updateWaqfs);
// remove file
fileRouter.delete('/', removeFile);

module.exports = {
    fileRouter
}