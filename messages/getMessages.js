const { transact } = require("../dbase/transact");
/**
 * Read message
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getMessages = async (req, res) => {
    const sql = `select messages.messageId, messages.firstName, messages.lastName, messages.userId, messages.subject, messages.message, 
    users.email from messages join users on users.userId = messages.userId`;
    const esc = [];
    res.json(await transact (sql, esc));
}

module.exports = {
    getMessages,
}