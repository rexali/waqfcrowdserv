const { transact } = require("../dbase/transact");
const { escapeHTML } = require("../utils/escapeHTML");
/** 
 * Add a new volunteer
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const addVolunteers = async (req, res) => {

    const {
        firstName, 
        lastName,
        email, 
        phone, 
        address, 
        localGovt, 
        state, 
        country, 
        education, 
        purpose, 
        age, 
        image, 
        dateOfBirth, 
        occupation, 
        userId
    } = req.body;

    const esc = [
        escapeHTML(firstName), 
        escapeHTML(lastName),
        escapeHTML(email), 
        escapeHTML(phone), 
        escapeHTML(address), 
        escapeHTML(localGovt), 
        escapeHTML(state), 
        escapeHTML(country), 
        escapeHTML(education), 
        escapeHTML(purpose), 
        escapeHTML(age), 
        escapeHTML(image), 
        escapeHTML(dateOfBirth), 
        escapeHTML(occupation), 
        escapeHTML(userId)
    ];

    const sql = `INSERT INTO volunteers(
        firstName, 
        lastName,
        email, 
        phone, 
        address, 
        localGovt, 
        state, 
        country, 
        education, 
        purpose, 
        age, 
        image, 
        dateOfBirth, 
        occupation, 
        userId
        )VALUES(
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?
            )`;
            
    res.json(await transact(sql, esc))

}

module.exports = {
    addVolunteers
}