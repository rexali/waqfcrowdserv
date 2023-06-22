const { transact } = require("../dbase/transact"); 
/**
 * Read replies
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const clearCart = async(req, res) => {
    const {id}= req.params;
    const sql = "delete from carts where carts.userId = ?";
    const esc = [id];
    res.json(await transact(sql, esc));
}

module.exports = {
    clearCart,
}