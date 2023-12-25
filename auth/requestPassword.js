const { changeHTMLMSQ } = require("../utils/changeHTMLMSQ");
const { escapeHTML } = require("../utils/escapeHTML");
const { isUserCodeUpdated } = require("./isUserCodeUpdated");
const { isUserEmail } = require("./isUserEmail");

/**
 * Request for password change
 * @param {object} req - user request
 * @param {object} res - response to user request
 */

const mutex = Promise.resolve();
const requestPassword = (req, res) => {
    mutex.then(async () => {
        
        const {
            email
        } = req.body;
    
        const esc = [
            email
        ];
    
        try {
            // escape the email
            const newEmail = escapeHTML(email);
            // genrate random code
            const rCode = uuidv4();
            // prepare sql to get email
            let sql = "SELECT email FROM users WHERE email =?";
            // check the email exist
            let result = await isUserEmail(sql, esc)
            // if exist prepare the sql to upadte the rCode
            if (result) {
                // sql to upadte the rCode
                const sql = `UPDATE users SET rCode = ? WHERE email= ? `;
                // update the user rCode
                let codeResult = await isUserCodeUpdated(sql, [rCode, newEmail]);
                if (codeResult) {
                    const html = changeHTMLMSQ(newEmail, rCode)
                    let mailResult = true; //await mailHelpers.sendMail(email, 'Request password', 'html', html, '')
                    if (mailResult) {
    
                        res.json({ result: true });
                    } else {
    
                        res.json({ result: false });
                    }
                } else {
                    console.warn('random code update error');
                }
            } else {
                console.warn('no email')
            }
        } catch (error) {
            console.warn(error);
        }
    }).catch((error)=>{
     console.warn(error);
    });

    return mutex;
}

module.exports = {
    requestPassword
}
