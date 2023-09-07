const nodemailer = require("nodemailer");
const { escapeHTML } = require("../utils/escapeHTML");
/**
 * Send an email to a user
 * @param {object} req - user request containing name,subject, email,body
 * @param {object} res - response to user request
 * @returns a boolean promise
 */
function sendMessage(req, res) {

    const {
        name,
        subject,
        email,
        body
    } = req.body

    const newName = escapeHTML(name);
    const newEmail = escapeHTML(email);
    const newSubject = escapeHTML(subject)
    const newBody = escapeHTML(body);

    var transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    });

    var mailOptions = {
        from: `${newName ? newName : "Almubarak Waqf"} <${process.env.USER}>`,
        to: newEmail,
        subject: newSubject,
        text: newBody
    };

    let promise = new Promise((resolve, reject) => {

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                resolve(false)
            } else {
                console.log('Email sent: ' + info.response);
                resolve(true)
            }

        });
    });

    return promise;
}

module.exports = { sendMessage };