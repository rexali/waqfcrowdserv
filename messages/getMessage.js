const { transact } = require("../dbase/transact");
/**
 * Read messages
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getMessage = async (req, res) => {
    try {
        const sql = "SELECT * FROM messages where messageId = ?";
        const messageId = req.params.id;
        const esc = [messageId];
        res.json(await transact(sql, esc, res));
    } catch (error) {
        console.warn(error);
    }

}

module.exports = {
    getMessage,
}