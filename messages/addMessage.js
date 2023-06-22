const { create } = require("../dbase/create");
/**
 * Add new message
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const addMessage = (req, res) => {
    const {
        name,
        subject,
        email,
        body
    } = req.body;

    const esc = [
        name,
        subject,
        email,
        body
    ];
    let sql = `INSERT INTO messages (name, subject, email, body) VALUES(?,?,?,?)`;
    create(sql, esc, res)
}

module.exports = {
    addMessage
}