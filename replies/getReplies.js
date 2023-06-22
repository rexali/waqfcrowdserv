const { transact } = require("../dbase/transact");
/**
 * Read replies
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getReplies = async(req, res) => {
    const sql = "SELECT * FROM replies";
    const esc = [];
    res.json(await transact(sql, esc));
}

module.exports = {
    getReplies,
}