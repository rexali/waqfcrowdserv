const { transact } = require("../dbase/transact");
/**
 * GEt a waqf
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getWaqf = async(req, res) => {
    const sql = `select * from projects where waqfId=?`;
    const waqfId = req.params.waqfId
    const esc = [waqfId];
    res.json(await transact(sql,esc));
}

module.exports = {
    getWaqf
}