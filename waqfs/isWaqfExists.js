const { transact } = require("../dbase/transact");
/**
 * GEt a waqf
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const isWaqfExists = async(req, res) => {
    const sql = `select * from likes where waqfId=? and userId=?`;
    const waqfId = req.params.waqfId;
    const userId = req.params.userId;
    const esc = [waqfId,userId];
    res.json(await transact(sql,esc));
}

module.exports = {
    isWaqfExists
}