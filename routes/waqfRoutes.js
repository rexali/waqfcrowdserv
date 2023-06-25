const express = require("express");  

const { getWaqf } = require("../waqfs/getWaqf");
const { getWaqfs } = require("../waqfs/getWaqfs");
const { addWaqf } = require("../waqfs/addWaqf");
const { getWaqfComments } = require("../waqfs/getWaqfComments");
const { getUserWaqfs } = require("../waqfs/getUserWaqfs");
const { deleteUserWaqf } = require("../waqfs/deleteUserWaqf");
const { isWaqfExists } = require("../waqfs/isWaqfExists");
const { getUserFavouriteWaqfs } = require("../waqfs/getUserFavouriteWaqfs");

const waqfRouter = express.Router();
// get a waqf
waqfRouter.get('/:id', getWaqf);
// get all waqfs
waqfRouter.get('/', getWaqfs);
// get a user's waqfs
waqfRouter.get('/:id/users', getUserWaqfs);
// delete a specific user's waqf
waqfRouter.post('/:id', deleteUserWaqf);
// add waqf
waqfRouter.post("/", addWaqf)
// get a waqf comments
waqfRouter.get('/:id/comments', getWaqfComments);
// get a waqf comments 
// waqfRouter.get('/:userId/:waqfId', isWaqfExists);
// get a waqf favourites
waqfRouter.get('/:id/favourites', getUserFavouriteWaqfs);

module.exports = {
    waqfRouter
}