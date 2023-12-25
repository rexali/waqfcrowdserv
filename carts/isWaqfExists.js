const { transact } = require("../dbase/transact");
/**
 * GEt a waqf
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const isWaqfExists = async (req, res) => {
    try {
        const sql = `select * from carts where waqfId=? and userId=? and price = ?`;
        const waqfId = req.params.waqfId;
        const userId = req.params.userId;
        const price = req.params.price;
        const esc = [waqfId, userId, price];
        res.json(await transact(sql, esc));
    } catch (error) {
        console.warn(error);
    }

}

module.exports = {
    isWaqfExists
}