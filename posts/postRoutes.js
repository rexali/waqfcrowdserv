const express = require("express"); 
 
const { addPost } = require("./addPost");
const { getPosts } = require("./getPosts");

const postRouter = express.Router();
// add an item to cart
postRouter.post('/', addPost);
// get all posts
postRouter.get('/', getPosts);

module.exports = {
    postRouter
}