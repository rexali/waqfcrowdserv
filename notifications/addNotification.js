const { transact } = require("../dbase/transact");
const { escapeHTML } = require("../utils/escapeHTML");
/**
 * Add new reply
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const addNotification = async (req, res) => {

    const {
        subject,
        message,
        userId,
    } = req.body;

    const esc = [
        escapeHTML(subject),
        escapeHTML(message),
        escapeHTML(userId),
    ];

    const sql = `INSERT INTO notifications(
        subject,
        body,
        userId
        )VALUES(
            ?,
            ?,
            ?
            )`;

    res.json(await transact(sql, esc))

}

module.exports = {
    addNotification
}