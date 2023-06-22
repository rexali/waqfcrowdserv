const express = require("express");

const { addVolunteers } = require("../volunteers/addVolunteer");
const { getVolunteers } = require("../volunteers/getVolunteers");

const volunteerRouter = express.Router();
// add a volunteer route
volunteerRouter.post('/', addVolunteers);
volunteerRouter.get('/', getVolunteers);

module.exports = {
    volunteerRouter
}