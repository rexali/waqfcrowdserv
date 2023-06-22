const express = require("express");

const { getReplies } = require("../replies/getReplies");
const { getReply } = require("../replies/getReply");
const { addReply } = require("../replies/addReply");

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