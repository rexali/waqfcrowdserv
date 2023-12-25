const { transact } = require("../dbase/transact");
/**
 * Remove message
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const removeMessage = async (req, res) => {
    try {
        const {messageId} = req.body;
        const esc = [
            messageId
        ]
        const  sql = "DELETE FROM messages WHERE messageId=?";
        res.json(await transact(sql, esc));
    } catch (error) {
        console.warn(error);
    }

}
module.exports = {
    removeMessage
}