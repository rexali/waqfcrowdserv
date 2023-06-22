const express = require("express");

const { getCausesComments } = require("../causes/getCauseComments");
const { getCause } = require("../causes/getCause");
const { getCauses } = require("../causes/getCauses");
const { addCause } = require("../causes/addCause");

const causeRouter = express.Router();
// get a single user
causeRouter.get('/:id', getCause);
// get all users
causeRouter.get('/', getCauses);
// add user users/
causeRouter.post("/", addCause)
// get project comments
causeRouter.get('/:id/comments', getCausesComments);

module.exports = {
    causeRouter
}