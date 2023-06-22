const express = require("express");

const { getUserCarts } = require("../carts/getUserCarts");
const { getCarts } = require("../carts/getCarts");
const { addCart } = require("../carts/addCart");
const { deleteCart } = require("../carts/deleteCart");
const { clearCart } = require("../carts/clearCart");

const cartRouter = express.Router();
// get all carts
cartRouter.get('/', getCarts);
// get a user cart items
cartRouter.get('/:id/users', getUserCarts);
// add an item to cart
cartRouter.post('/', addCart);
// delete carts
cartRouter.post('/:id', deleteCart);
// claer carts
cartRouter.put('/:id', clearCart);

module.exports = {
    cartRouter
}