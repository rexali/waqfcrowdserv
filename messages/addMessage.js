const { transact } = require("../dbase/transact");
const { escapeHTML } = require("../utils/escapeHTML"); 
/**
 * Add new message
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const addMessage = async (req, res) => {
 
    const {
        firstName,
        lastName,
        subject,
        email,
        message,
        from,
        userId
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
        userId
    ];

    const sql = `INSERT INTO messages (firstName, lastName, subject, email, message, userId) VALUES(?,?,?,?,?,?)`;

    res.json(await transact(sql, esc));
}

module.exports = {
    addMessage
}