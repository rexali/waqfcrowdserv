const { read } = require("../dbase/read");
/**
 * Read message
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getMessages = (req, res) => {
    const sql = "SELECT * FROM messages";
    const esc = [];
    read(sql, esc, res);
}

module.exports = {
    getMessages,
}