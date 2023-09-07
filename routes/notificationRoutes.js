const express = require("express");

const { getNotifications } = require("../notifications/getNotifications");
const { getNotification } = require("../notifications/getNotification");
const { addNotification } = require("../notifications/addNotification");
const { updateNotification } = require("../notifications/updateNotification");
const { deleteNotification } = require("../notifications/deleteNotification");

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