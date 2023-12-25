const express = require("express"); 
 
const { addSubscription } = require("./addSubscription");
const { removeSubscription } = require("./removeSubscription");

const subscriptionRouter = express.Router();
// add an item to cart
subscriptionRouter.post('/', addSubscription);
subscriptionRouter.delete('/', removeSubscription);

module.exports = {
    subscriptionRouter
}