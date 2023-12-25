const express = require("express");

const { getNotifications } = require("./getNotifications");
const { getNotification } = require("./getNotification");
const { addNotification } = require("./addNotification");
const { updateNotification } = require("./updateNotification");
const { deleteNotification } = require("./deleteNotification");

const notificationRouter = express.Router();
// get all notices
notificationRouter.get('/', getNotifications);
// get a single notice
notificationRouter.get('/:id', getNotification);
// add a single reply
notificationRouter.post('/', addNotification);
// update notification
notificationRouter.patch('/', updateNotification);
// delete notification
notificationRouter.delete('/', deleteNotification);

module.exports = {
    notificationRouter
}