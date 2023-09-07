const { transact } = require("../dbase/transact");
/**
 * Read updates
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getUpdate = async (req, res) => {
    const sql = "SELECT * FROM updates where waqfId = ?";
    const waqfId = req.params.id;
    const esc = [waqfId];
    res.json(await transact(sql, esc, res));
}

module.exports = {
    getUpdate,
}