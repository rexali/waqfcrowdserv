const { transact } = require("../dbase/transact");
/**
 * Remove message
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const deleteUpdate = async (req, res) => {
    const {updateId} = req.body;
    const esc = [
        updateId
    ]
    const  sql = "DELETE FROM updates WHERE updateId=?";
    res.json(await transact(sql, esc));
}
module.exports = {
    deleteUpdate
}