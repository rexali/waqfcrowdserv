const { read } = require("../dbase/read");
/**
 * Read messages
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getMessage = (req, res) => {
    const sql = "SELECT * FROM messages where messageId = ?";
    const messageId = req.params.messageId;
    const esc = [messageId];
    read(sql, esc, res);
}

module.exports = {
    getMessage,
}