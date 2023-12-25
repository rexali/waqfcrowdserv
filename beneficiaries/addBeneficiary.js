const { transact } = require("../dbase/transact");
const { addBeneficiaryLocation } = require("../locations/addBeneficiaryLocation");
const { escapeHTML } = require("../utils/escapeHTML");
/** 
 * Add a new beneficiary
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const addBeneficiary = async (req, res) => {

    try {
        // get benficiary data
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
        //  escape the data
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
        // prepare sql
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
        // insert data
        let beneficiaryResult = await transact(sql, esc);
        // check if it is a success
        if (beneficiaryResult.affectedRows === 1 && beneficiaryResult.insertId) {
            // add beneficiary location data
            await addBeneficiaryLocation(req, res, beneficiaryResult.insertId);
        }
    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    addBeneficiary
}