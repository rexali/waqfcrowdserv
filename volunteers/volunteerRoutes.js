const express = require("express");

const { addVolunteers } = require("./addVolunteer");
const { getVolunteers } = require("./getVolunteers");

const volunteerRouter = express.Router();
// add a volunteer route
volunteerRouter.post('/', addVolunteers);
volunteerRouter.get('/', getVolunteers);

module.exports = {
    volunteerRouter
}