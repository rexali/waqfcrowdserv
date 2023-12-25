const express = require("express");

const { searchWaqf } = require("./searchWaqfs");

const searchRouter = express.Router();
// search waqfs
searchRouter.get('/', searchWaqf);

module.exports = {
    searchRouter
}