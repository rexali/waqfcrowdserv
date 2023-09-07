const express = require("express");

const { getMessages } = require("../messages/getMessages");
const { getMessage } = require("../messages/getMessage");
const { addMessage } = require("../messages/addMessage");
const { updateMessage } = require("../messages/updateMessage");
const { removeMessage } = require("../messages/removeMessage");

const messageRouter = express.Router();
// get all messages
messageRouter.get('/', getMessages);
// get a single message
messageRouter.get('/:id', getMessage);
// get a single message
messageRouter.post('/', addMessage);
// update message
messageRouter.patch('/', updateMessage);
// delete message
messageRouter.delete('/', removeMessage);

module.exports = {
    messageRouter
}