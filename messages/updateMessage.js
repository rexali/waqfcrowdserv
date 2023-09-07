const { transact } = require("../dbase/transact");
const { escapeHTML } = require("../utils/escapeHTML");
/**
 * Add new message
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const updateMessage = async (req, res) => {

    const {
        firstName,
        lastName,
        subject,
        email,
        message,
        messageId
    } = req.body;

    const newFirstName = escapeHTML(firstName);
    const newLastName = escapeHTML(lastName);
    const newSubject = escapeHTML(subject);
    const newEmail = escapeHTML(email);
    const newMessage = escapeHTML(message);

    const esc = [
        newFirstName,
        newLastName,
        newSubject,
        newEmail,
        newMessage,
        messageId
    ];

    const sql = `update messages set firstName = ?, lastName = ?, subject=?, email = ?, message = ? where messageId = ?`;

    res.json(await transact(sql, esc));
}

module.exports = {
    updateMessage
}