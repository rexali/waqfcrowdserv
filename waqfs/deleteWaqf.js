const { transact } = require("../dbase/transact");
/**
 * Delete a waqf
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const deleteWaqf = async (req, res) => {
    try {
        const waqfId = req.body.waqfId;
        const esc = [waqfId];
        const waqf_sql = `delete from waqfs where waqfId=?;`;
        // const loc_sql = `delete from locations where waqfId=?;`;
        const result = await transact(waqf_sql, esc);
        if (result.affectedRows) {
            // res.json(await transact(loc_sql, esc));
            res.json(result);
        }
    } catch (error) {
        console.warn(error);
    }

};

module.exports = {
    deleteWaqf
}