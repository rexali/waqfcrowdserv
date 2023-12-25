const { transact } = require("../dbase/transact");
const { escapeHTML } = require("../utils/escapeHTML");
/**
 * Add a new cart item
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const addCart = async (req, res) => {
    try {
        const {
            price,
            category,
            userId,
            waqfId,
            quantity
        } = req.body;

        const esc = [
            escapeHTML(price),
            escapeHTML(category),
            escapeHTML(userId),
            escapeHTML(waqfId),
            escapeHTML(quantity)
        ];

        const checkSQL = `select * from carts where userId=? and waqfId =? and price=?`;

        const check_esc = [
            escapeHTML(userId),
            escapeHTML(waqfId),
            escapeHTML(price)
        ];

        const result = await transact(checkSQL, check_esc);

        if (result.length === 1) {
            const cartId = result[0].cartId;
            const updateSQL = `update carts set quantity = carts.quantity + 1 where cartId=?`;
            const update_esc = [
                cartId
            ];

            res.json(await transact(updateSQL, update_esc));

        } else {
            const sql = `INSERT INTO carts(
            price, 
            category, 
            userId, 
            waqfId,
            quantity
            )VALUES(
                ?,
                ?,
                ?,
                ?,
                ?
                )`;

            res.json(await transact(sql, esc))
        }

    } catch (error) {
        console.warn(error);
    }
}
module.exports = {
    addCart
}