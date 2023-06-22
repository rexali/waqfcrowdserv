const express = require("express");

const { searchWaqf } = require("../searchs/searchWaqfs");

const searchRouter = express.Router();
// search waqfs
searchRouter.get('/', searchWaqf);

module.exports = {
    searchRouter
}