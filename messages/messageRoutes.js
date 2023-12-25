const express = require("express");

const { getMessages } = require("./getMessages");
const { getMessage } = require("./getMessage");
const { addMessage } = require("./addMessage");
const { updateMessage } = require("./updateMessage");
const { removeMessage } = require("./removeMessage");

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