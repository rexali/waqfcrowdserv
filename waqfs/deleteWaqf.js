const { transact } = require("../dbase/transact");
/**
 * Delete a waqf
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const deleteWaqf = async (req, res) => {
    const waqfId = req.params.waqfId
    
    const esc = [waqfId];

    const sql = `delete from waqf where waqfId=?`;
    res.json(await transact(sql,esc))  
};

module.exports = {
    deleteWaqf
}