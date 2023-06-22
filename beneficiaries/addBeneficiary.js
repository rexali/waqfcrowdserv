const { transact } = require("../dbase/transact");
const { escapeHTML } = require("../utils/escapeHTML");
/** 
 * Add a new beneficiary
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const addBeneficiary = async (req, res) => {

    const {
        firstName,
        lastName,
        email,
        phone,
        amount,
        purpose,
        age,
        gender,
        image,
        dateOfBirth,
        occupation,
        streetaddress,
        localGovt,
        state,
        country,
        education,
        userId,
        waqfId,
        projectId
    } = req.body;

    const esc = [
        escapeHTML(firstName),
        escapeHTML(lastName),
        escapeHTML(email),
        escapeHTML(phone),
        escapeHTML(amount),
        escapeHTML(purpose),
        escapeHTML(age),
        escapeHTML(gender),
        escapeHTML(image),
        escapeHTML(dateOfBirth),
        escapeHTML(occupation),
        escapeHTML(streetaddress),
        escapeHTML(localGovt),
        escapeHTML(state),
        escapeHTML(country),
        escapeHTML(education),
        escapeHTML(userId),
        escapeHTML(waqfId),
        escapeHTML(projectId)
    ];

    const sql = `INSERT INTO beneficiaries(
        firstName,
        lastName,
        email,
        phone,
        amount,
        purpose,
        age,
        gender,
        image,
        dateOfBirth,
        occupation,
        streetaddress,
        localGovt,
        state,
        country,
        education,
        userId,
        waqfId,
        projectId
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
            ?,
            ?,
            ?,
            ?,
            ?
            )`;

    res.json(await transact(sql, esc))

}

module.exports = {
    addBeneficiary
}