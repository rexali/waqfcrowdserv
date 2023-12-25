const express = require("express");

const { getUpdate } = require("./getUpdate");
const { getUpdates } = require("./getUpdates");
const { addUpdate } = require("./addUpdate");
const { updateUpdate } = require("./updateUpdate");
const { deleteUpdate } = require("./deleteUpdate");

const updateRouter = express.Router();
// get all messages
updateRouter.get('/', getUpdates);
// get a single message
updateRouter.get('/:id', getUpdate);
// get a single message
updateRouter.post('/', addUpdate);
// update message
updateRouter.patch('/', updateUpdate);
// delete message
updateRouter.delete('/', deleteUpdate);

module.exports = {
    updateRouter
}