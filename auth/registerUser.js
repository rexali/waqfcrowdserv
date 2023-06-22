const { hashpass } = require("../utils/hashHelper");
const { v4: uuidv4 } = require("uuid");
const { escapeHTML } = require("../utils/escapeHTML");
const { regHTMLMSQ } = require("../messages/regHTMLMSQ");
const { transact } = require("../dbase/transact");
/**
 * Register new user
 * @param {object} req - user request object
 * @param {object} res - response to user request
 */
const registerUser = async (req, res) => {
    console.log("welcome");
    const { email, password } = req.body;
    const newPassword = escapeHTML(password);
    const newEmail = escapeHTML(email)
    const hassPassword = hashpass(newPassword)
    const rCode = uuidv4();
    const esc = [newEmail, hassPassword, rCode]
    const sql = `INSERT INTO users (email, password, rCode) VALUES (?,?,?)`;
    const html = regHTMLMSQ(newEmail, rCode);
    let text = '';
    let subject = 'New registration';
    let format = "html";
    let mailResult = true;  //await mailHelpers.sendMail(email, subject, format, html, text) 
    if (mailResult) {
        res.json(await transact(sql, esc));
    } else {
        if (mailResult) {
            create(sql, esc, res);
        } else {
            console.log("Fail to send email");
            res.json({ result: false, error: 'Fail to send email' });
        }
    }
}

module.exports = {
    registerUser
}