const { transact } = require("../dbase/transact");
const { escapeHTML } = require("../utils/escapeHTML");

const updateCart = async (req, res) => {
    const {
        quantity,
        cartId,
    } = req.body;

    const sql = `update carts set quantity = ? where cartId = ?`

    const esc = [
        escapeHTML(quantity),
        escapeHTML(cartId)
    ];
    res.json(await transact(sql, esc));;
};

module.exports = {
    updateCart
}