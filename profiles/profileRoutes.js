const express = require("express");

const { getProfile } = require("./getProfile");
const { getProfiles } = require("./getProfiles");
const { addProfile } = require("./addProfile");
const { updateProfile } = require("./updateProfile");
const { submitProfile } = require("./submitProfile");

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
// profileRouter.post("/:id", updateProfile);
profileRouter.post("/:id", submitProfile);

module.exports = {
    profileRouter
}