const express = require("express");

const { getWaqf } = require("../waqfs/getWaqf");  
const { getWaqfs } = require("../waqfs/getWaqfs"); 
const { addWaqf } = require("../waqfs/addWaqf");
const { getWaqfComments } = require("../waqfs/getWaqfComments");
const { getUserWaqfs } = require("../waqfs/getUserWaqfs");
const { deleteUserWaqf } = require("../waqfs/deleteUserWaqf");
const { getUserFavouriteWaqfs } = require("../waqfs/getUserFavouriteWaqfs");
const { deleteWaqf } = require("../waqfs/deleteWaqf");
const { approveWaqf } = require("../waqfs/approveWaqf");
const { updateWaqf } = require("../waqfs/updateWaqf");
const { updateWaqfFile } = require("../waqfs/updateWaqfFile");

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
waqfRouter.patch('/', approveWaqf);
// approve a specific waqf
waqfRouter.patch('/file', updateWaqfFile);
// add waqf
waqfRouter.post("/", addWaqf);
// update waqf
waqfRouter.patch("/update", updateWaqf);
// get a waqf comments
waqfRouter.get('/:id/comments', getWaqfComments);
// get a waqf favourites
waqfRouter.get('/:id/favourites', getUserFavouriteWaqfs);

module.exports = {
    waqfRouter
}