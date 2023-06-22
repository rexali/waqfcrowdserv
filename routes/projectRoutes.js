const express = require("express");

const { getProjectComments } = require("../projects/getProjectComments");
const { getProject } = require("../projects/getProject");
const { getProjects } = require("../projects/getProjects");
const { addProject } = require("../projects/addProject");

const projectRouter = express.Router();
// get a single user
projectRouter.get('/:id', getProject);
// get all users
projectRouter.get('/', getProjects);
// add user users/
projectRouter.post("/", addProject)
// get project comments
projectRouter.get('/:id/comments', getProjectComments);

module.exports = {
    projectRouter
}