const express = require("express");

const { getWaqf } = require("./getWaqf");  
const { getWaqfs } = require("./getWaqfs"); 
const { addWaqf } = require("./addWaqf");
const { getWaqfComments } = require("./getWaqfComments");
const { getUserWaqfs } = require("./getUserWaqfs");
const { deleteUserWaqf } = require("./deleteUserWaqf");
const { getUserFavouriteWaqfs } = require("./getUserFavouriteWaqfs");
const { deleteWaqf } = require("./deleteWaqf");
const { approveWaqf } = require("./approveWaqf");
// const { updateWaqf } = require("./updateWaqfx");
const { updateWaqfFile } = require("./updateWaqfFile");
const { postWaqf } = require("./postWaqf");
const { updateWaqf } = require("./updateWaqf");

const waqfRouter = express.Router();
// get a waqf
waqfRouter.get('/:id', getWaqf);
// get all waqfs
waqfRouter.get('/', getWaqfs);
// get a user's waqfs
waqfRouter.get('/:id/users', getUserWaqfs); 
// delete a specific user's waqf
waqfRouter.post('/:id', deleteUserWaqf);
// delete a specific waqf
waqfRouter.delete('/', deleteWaqf);
// approve a specific waqf
waqfRouter.patch('/approve', approveWaqf);
// approve a specific waqf
waqfRouter.patch('/file', updateWaqfFile);
// add waqf
waqfRouter.post("/", postWaqf);
// update waqf
waqfRouter.patch("/update", updateWaqf);
// get a waqf comments
waqfRouter.get('/:id/comments', getWaqfComments);
// get a waqf favourites
waqfRouter.get('/:id/favourites', getUserFavouriteWaqfs);

module.exports = {
    waqfRouter
}