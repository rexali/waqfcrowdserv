const { transact } = require("../dbase/transact");
/**
 * Delete a waqf
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const deleteUserWaqf = async (req, res) => {

    try {
        const { userId, waqfId } = req.body;
        const esc = [waqfId, userId];
    
        const sql = `delete from waqfs where waqfId=? and userId=?`;
        res.json(await transact(sql, esc))
    } catch (error) {
     console.warn(error);   
    }
   
};

module.exports = {
    deleteUserWaqf
}