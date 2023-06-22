const express = require("express");

const { getMessages } = require("../messages/getMessages");
const { getMessage } = require("../messages/getMessage");

const messageRouter = express.Router();
// get all messages
messageRouter.get('/', getMessages);
// get a single message
messageRouter.get('/:d', getMessage);


module.exports = {
    messageRouter
}