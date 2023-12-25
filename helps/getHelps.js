const { transact } = require("../dbase/transact");
/**
 * Get all partners
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getHelps = async (req, res) => {
    try {
        const sql = `select * from helps`;
        const esc = [];
        res.json(await transact(sql, esc));
    } catch (error) {
        console.warn(error);
    }

}

module.exports = {
    getHelps
}