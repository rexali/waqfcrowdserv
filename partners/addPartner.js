const { transact } = require("../dbase/transact");
const { escapeHTML } = require("../utils/escapeHTML");
/** 
 * Add a new partner
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const addPartner = async (req, res) => {

    const {
        firstName,
        lastName,
        email,
        phone,
        address,
        localGovt,
        state,
        country,
        purpose,
        image,
        role,
        organisation,
        dateOfInception,
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
        escapeHTML(purpose),
        escapeHTML(image),
        escapeHTML(role),
        escapeHTML(organisation),
        escapeHTML(dateOfInception),
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
        purpose,
        image,
        role,
        organisation,
        dateOfInception,
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
            ?
            )`;

    res.json(await transact(sql, esc))

}

module.exports = {
    addPartner
}