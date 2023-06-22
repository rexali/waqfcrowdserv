const express = require("express"); 
 

const { addLike } = require("../likes/addLike");

const likeRouter = express.Router();
// add an item to cart
likeRouter.post('/', addLike);

module.exports = {
    likeRouter
}