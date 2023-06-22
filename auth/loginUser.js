const { getUserPassword } = require("./getUserPassword");
const { getUserToken } = require("./getUserToken");
const { checkpass } = require("../utils/hashHelper");
const { escapeHTML } = require("../utils/escapeHTML");

/**
 * Login user
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const newPassword = escapeHTML(password);
    const newEmail = escapeHTML(email)
    const esc = [newEmail]
    const sql = `SELECT password FROM users WHERE email = ?`;
    const DbPassword = await getUserPassword(sql, esc);
    if (checkpass(DbPassword, newPassword)) {
        const sql = `SELECT userId, email FROM users WHERE email = ?`;
        const {token,userId,email} = await getUserToken(sql, esc);
        res.cookie('token', token, { httpOnly: true });
        res.json({ token:token, userId, email});
    } else {
        console.log('password mismatch');
        res.json({ result: 'password mismatch' });
    }
}

module.exports = {
    loginUser
}