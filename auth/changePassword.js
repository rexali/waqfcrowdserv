const { transact } = require("../dbase/transact");
const { escapeHTML } = require("../utils/escapeHTML");
const { hashpass } = require("../utils/hashHelper");
const { isUserEmail } = require("./isUserEmail");
const { Mutex } = require("async-mutex");

// create mutex instance
const mutex = new Mutex();
/**
 * Change password
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const changePassword = async (req, res) => {
    // acquire access to the path to do operation (for race condition)
    const release = await mutex.acquire();
    try {
        const {
            email,
            rCode,
            password
        } = req.body;

        const newEmail = escapeHTML(email);
        const newCode = escapeHTML(rCode);
        const newPassword = escapeHTML(password);

        const esc = [
            newEmail,
            newCode
        ];

        const sql = "SELECT email FROM users WHERE email =? and rCode =?";

        let result = await isUserEmail(sql, esc);

        if (result) {
            const esc = [
                hashpass(newPassword),
                newEmail,
                newCode
            ];
            let sql = "UPDATE users SET password =? WHERE email=? AND rCode =?";
            res.json(await transact(sql, esc));
        }
    } catch (error) {
        console.warn(error);
    } finally {
        // release path for other
        release();
    }

}

module.exports = {
    changePassword
}