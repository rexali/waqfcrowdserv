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
        body,
        createdAt,
        updatedAt,
        userId,
    } = req.body;

    const esc = [
        escapeHTML(subject),
        escapeHTML(body),
        escapeHTML(createdAt),
        escapeHTML(updatedAt),
        escapeHTML(userId),
    ];

    const sql = `INSERT INTO notifications(
        subject,
        body,
        createdAt,
        updatedAt,
        userId,
        )VALUES(
            ?,
            ?,
            ?,
            ?,
            ?
            )`;
    res.json(await transact(sql, esc))

}

module.exports = {
    addNotification
}