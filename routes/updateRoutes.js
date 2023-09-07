const express = require("express");

const { getUpdate } = require("../updates/getUpdate");
const { getUpdates } = require("../updates/getUpdates");
const { addUpdate } = require("../updates/addUpdate");
const { updateUpdate } = require("../updates/updateUpdate");
const { deleteUpdate } = require("../updates/deleteUpdate");

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