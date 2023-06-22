const { transact } = require("../dbase/transact");

/**
 * Delete all waqfs
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const deleteWaqfs = async (req, res) => {
    const sql = `delete from waqfs`;
    const esc = [];
    res.json(await transact(sql,esc))  
};

module.exports = {
    deleteWaqfs
}