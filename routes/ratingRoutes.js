const express = require("express"); 
 
const { addRating } = require("../ratings/addRating");

const ratingRouter = express.Router();
// add an item to cart
ratingRouter.post('/', addRating); 

module.exports = {
    ratingRouter
}