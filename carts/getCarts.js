const { transact } = require("../dbase/transact");
/**
 * Read replies
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getCarts = async(req, res) => {
    const sql = "SELECT * FROM carts";
    const esc = [];
    res.json(await transact(sql, esc));
}

module.exports = {
    getCarts,
}