const { transact } = require("../dbase/transact"); 
/**
 * Delete a waqf
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const deleteWaqf = async (req, res) => {
    const waqfId = req.body.waqfId;
    const esc = [waqfId];
    const waqf_sql = `delete from waqfs where waqfId=?;`;
    const loc_sql = `delete from locations where waqfId=?;`;
    const { affectedRows } = await transact(waqf_sql, esc);
    if (affectedRows) {
        res.json(await transact(loc_sql, esc));
    }
};

module.exports = {
    deleteWaqf
}