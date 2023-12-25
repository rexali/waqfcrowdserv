const express = require("express");

const { getReplies } = require("./getReplies");
const { getReply } = require("./getReply");
const { addReply } = require("./addReply");

const replyRouter = express.Router();
// get all replies
replyRouter.get('/', getReplies);
// get a single reply
replyRouter.get('/:id', getReply);
// add a single reply
replyRouter.post('/', addReply);

module.exports = {
    replyRouter
}