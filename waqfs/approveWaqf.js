const { transact } = require("../dbase/transact");
/**
 * Delete a waqf
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const approveWaqf = async (req, res) => {
    try {
        const { waqfId } = req.body;
        const esc = [waqfId];
        const sql = `update waqfs set permission = 'yes' where waqfId=?`;
        res.json(await transact(sql, esc));
    } catch (error) {
        console.warn(error);
    }
   
};

module.exports = {
    approveWaqf
}