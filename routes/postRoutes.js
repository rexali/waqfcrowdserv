const express = require("express"); 
 
const { addPost } = require("../posts/addPost");
const { getPosts } = require("../posts/getPosts");

const postRouter = express.Router();
// add an item to cart
postRouter.post('/', addPost);
// get all posts
postRouter.get('/', getPosts);

module.exports = {
    postRouter
}