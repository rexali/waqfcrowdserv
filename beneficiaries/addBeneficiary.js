const { transact } = require("../dbase/transact");
const { addBeneficiaryLocation } = require("../locations/addBeneficiaryLocation");
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
        userId
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
        escapeHTML(userId),
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
            ?
            )`;

    let beneficiaryResult = await transact(sql, esc);
    if (beneficiaryResult.affectedRows === 1 && beneficiaryResult.insertId) {
        await addBeneficiaryLocation(req, res, beneficiaryResult.insertId);
    }
}

module.exports = {
    addBeneficiary
}