const { getUserPassword } = require("./getUserPassword");
const { getUserToken } = require("./getUserToken");
const { checkpass } = require("../utils/hashHelper");
const { escapeHTML } = require("../utils/escapeHTML");
const { Mutex } = require("async-mutex");

// create mutex instance
const mutex = new Mutex();
/**
 * Login user
 * @param {object} req - user request 
 * @param {object} res - response to user request
 */
const loginUser = async (req, res) => {
    // acquire access to the path to do operation (for race condition)
    const release = await mutex.acquire();
    try {
        // get email and password
        const { email, password } = req.body;
        //   check if email and password are not null
        if (email & password) {

            let error_response = {
                error: 404,
                message: "email or password missing"
            };

            res.json({
                result:
                    false,       
                ...error_response
            });
        }
        // make safe email and password by escaping html elements
        const newPassword = escapeHTML(password);
        const newEmail = escapeHTML(email);
        // sql input data to be escape
        const esc = [newEmail];
        //  prepare sql
        const sql = `SELECT password FROM users WHERE email = ?`;
        // get store password
        const DbPassword = await getUserPassword(sql, esc);
        // check to see is not empty
        if (!DbPassword) {

            let error_response = {
                error: 404,
                message: "email or password missing"
            };

            res.json({ result: false, ...error_response });
        }
    //    verify the password with a given password 
        if (checkpass(DbPassword, newPassword)) {  
            const sql = `SELECT userId, email, role FROM users WHERE email = ?`;
            const { token, userId, email, role} = await getUserToken(sql, esc);

            res.cookie('token', token, { httpOnly: true, secure: false });

            res.json({
                result: true,
                token,
                userId,
                email,
                role
            });
        } else {
            res.json({
                result: false,
                error:'password mismatch',
            });
        }

    } catch (error) {
        console.warn(error);
    } finally {
        // release path for other
        release();
    }

}

module.exports = {
    loginUser
}