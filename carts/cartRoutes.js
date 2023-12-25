const express = require("express");

const { getUserCarts } = require("./getUserCarts");
const { getCarts } = require("./getCarts");
const { addCart } = require("./addCart");
const { deleteCart } = require("./deleteCart");
const { clearCart } = require("./clearCart");
const { updateCart } = require("./updateCart");

const cartRouter = express.Router();
// get all carts
cartRouter.get('/', getCarts);
// get a user cart items
cartRouter.get('/:id/users', getUserCarts);
// add an item to cart
cartRouter.post('/', addCart);
// update carts
cartRouter.patch('/', updateCart);
// delete carts
cartRouter.post('/:id', deleteCart);
// claer carts
cartRouter.put('/:id', clearCart);


module.exports = {
    cartRouter
}