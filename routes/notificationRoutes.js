const express = require("express");

const { getNotifications } = require("../notifications/getNotifications");
const { getNotification } = require("../notifications/getNotification");
const { addNotification } = require("../notifications/addNotification");

const notificationRouter = express.Router();
// get all replies
notificationRouter.get('/', getNotifications);
// get a single reply
notificationRouter.get('/:id', getNotification);
// add a single reply
notificationRouter.post('/', addNotification);

module.exports = {
    notificationRouter
}