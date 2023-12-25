const { transact } = require("../dbase/transact");

/**
 * Delete all waqfs
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const deleteWaqfs = async (req, res) => {
    try {
        const sql = `delete from waqfs`;
        const esc = [];
        res.json(await transact(sql,esc))  
    } catch (error) {
        console.warn(error);
    }
   
};

module.exports = {
    deleteWaqfs
}