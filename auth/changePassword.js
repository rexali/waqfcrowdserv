const { transact } = require("../dbase/transact");
const { escapeHTML } = require("../utils/escapeHTML");
const { hashpass } = require("../utils/hashHelper");
const { isUserEmail } = require("./isUserEmail");

/**
 * Change password
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const changePassword = async(req, res) => {
    const {
        email,
        rCOde,
        password 
    } = req.body;

    const newEmail = escapeHTML(email);
    const newCode = escapeHTML(rCOde);
    const newPassword = escapeHTML(password);

    const esc = [
        newEmail,
        newCode
    ];

    const sql = "SELECT email FROM users WHERE email =? and rCOde =?";

    let result = await isUserEmail(sql, esc);

    if (result) {
        const esc = [
            hashpass(newPassword),
            newEmail,
            newCode
        ];
        let sql = "UPDATE users SET password =? WHERE email=? AND rCOde =?";
        res.json(await transact(sql, esc));
    }
}

module.exports={
    changePassword
}