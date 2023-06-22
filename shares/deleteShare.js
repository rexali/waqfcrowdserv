const { transact } = require("../dbase/transact");
/**
 * Read replies 
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const deleteShare = async(req, res) => {
    const {id}= req.params;
    const sql = "delete from shares where shares.shareId = ?";
    const esc = [id];
    res.json(await transact(sql, esc));
}

module.exports = {
    deleteShare,
}