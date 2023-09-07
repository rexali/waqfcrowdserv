const { changeHTMLMSQ } = require("../utils/changeHTMLMSQ");
const { escapeHTML } = require("../utils/escapeHTML");
const { isUserCodeUpdated } = require("./isUserCodeUpdated");
const { isUserEmail } = require("./isUserEmail");

/**
 * Request for password change
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const requestPassword = async (req, res) => {

    const {
        email
    } = req.body;

    const esc = [
        email
    ];

    const newEmail = escapeHTML(email);
    const rCode = uuidv4();

    let sql = "SELECT email FROM users WHERE email =?";
    let result = await isUserEmail(sql, esc)
    if (result) {
        const sql = `UPDATE users SET rCode = ? WHERE email= ? `;
        let codeResult = await isUserCodeUpdated(sql, [rCode, newEmail])
        if (codeResult) {
            const html = changeHTMLMSQ(newEmail, rCode)
            let mailResult = true; //await mailHelpers.sendMail(email, 'Request password', 'html', html, '')
            if (mailResult) {
                res.json({ result: true });
            } else {
                res.json({ result: false });
            }
        } else {
            console.log('random code update error');
        }
    } else {
        console.log('no email')
    }
}

module.exports = {
    requestPassword
}
