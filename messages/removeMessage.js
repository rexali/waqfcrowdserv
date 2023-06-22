const { remove } = require("../dbase/remove");
/**
 * Remove message
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const removeMessage = (req, res) => {
    let message_id = req.params.id;
    let esc = [
        message_id
    ]
    let sql = "DELETE FROM messages WHERE message_id=?";
    remove(sql, esc, res);
}
module.exports = {
    removeMessage
}