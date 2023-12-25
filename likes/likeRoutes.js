const express = require("express"); 
 

const { addLike } = require("./addLike");

const likeRouter = express.Router();
// add an item to cart
likeRouter.post('/', addLike);

module.exports = {
    likeRouter
}