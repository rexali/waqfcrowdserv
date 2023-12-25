const { transact } = require("../dbase/transact");
/**
 * Read replies
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const clearCart = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "delete from carts where carts.userId = ?";
        const esc = [id];
        res.json(await transact(sql, esc));
    } catch (error) {
        console.warn(error);
    }

}

module.exports = {
    clearCart,
}