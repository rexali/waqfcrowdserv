const { transact } = require("../dbase/transact");
/**
 * Get all partners
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getHelp = async (req, res) => {
    try {
        const helpId = req.body.helpId;
        const sql = `select * from helps where helpId=?`;
        const esc = [helpId];
        res.json(await transact(sql, esc));
    } catch (error) {
        console.warn(error);
    }

}

module.exports = {
    getHelp
}