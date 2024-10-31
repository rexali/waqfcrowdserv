const { transact } = require("../dbase/transact");
/**
 * Read message
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getMessages = async (req, res) => {
    try {
        var page = parseInt(req.query?.page ?? 1);
        var pageSize = 4;
        let startIndex = (page - 1) * pageSize;
        let endIndex = page * pageSize;
        const sql = `select messages.messageId, messages.firstName, messages.lastName, messages.userId, messages.subject, messages.message, 
        users.email from messages join users on users.userId = messages.userId`;
        const esc = [];
        let messages = await transact(sql, esc);
        messages = messages.slice(startIndex, endIndex);
        res.json(messages.map(message => ({
            ...message,
            messagesLength: messages.length,
        })));
    } catch (error) { 
        console.warn(error);
    }

}

module.exports = {
    getMessages,
}