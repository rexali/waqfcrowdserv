const express = require("express");

const { getComments } = require("./getComments");
const { getComment } = require("./getComment");
const { getCommentReplies } = require("./getCommentReplies");
const { addComment } = require("./addComment");

const commentRouter = express.Router();
// get all messages
commentRouter.get('/', getComments);
// get a single message
commentRouter.get('/:id', getComment);
// get a comment's replies
commentRouter.get('/:id/replies', getCommentReplies);
// add a comment
commentRouter.post('/', addComment);

module.exports = {
    commentRouter 
}