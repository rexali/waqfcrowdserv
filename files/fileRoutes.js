const express = require("express");

const { addFile } = require("./addFile");
const { addFiles } = require("./addFiles");
const { removeFile } = require("./removeFile");
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