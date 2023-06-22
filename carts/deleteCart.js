const { transact } = require("../dbase/transact");
/**
 * Read replies 
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const deleteCart = async(req, res) => {
    const {id}= req.params;
    console.log(id);
    const sql = "delete from carts where cartId = ?";
    const esc = [id];
    res.json(await transact(sql, esc));
}

module.exports = {
    deleteCart,
}