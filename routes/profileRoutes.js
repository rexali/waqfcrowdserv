const express = require("express");

const { getProfile } = require("../profiles/getProfile");
const { getProfiles } = require("../profiles/getProfiles");
const { addProfile } = require("../profiles/addProfile");
const { updateProfile } = require("../profiles/updateProfile");

const profileRouter = express.Router();
// get a single user
profileRouter.get('/:id', getProfile);
// get a user profile with its location data
profileRouter.get('/:id/locations', getProfile);
// get all users
profileRouter.get('/', getProfiles);
// add user users/
profileRouter.post("/", addProfile);
// add user users/
profileRouter.post("/:id", updateProfile);

module.exports = {
    profileRouter
}