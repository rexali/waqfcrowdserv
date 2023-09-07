const { transact } = require("../dbase/transact");
const { addLocation } = require("../locations/addWaqfLocation");
const { addPartnerLocation } = require("../locations/addPartnerLocation");
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
        escapeHTML(purpose),
        escapeHTML(image),
        escapeHTML(role),
        escapeHTML(organisation),
        escapeHTML(dateOfInception),
        escapeHTML(userId)
    ];

    const sql = `INSERT INTO partners(
        firstName,
        lastName,
        email,
        phone,
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
            ?
            )`;
    let partnerResult = await transact(sql, esc);
    if (partnerResult.affectedRows === 1 && partnerResult.insertId) {
        await addPartnerLocation(req, res, partnerResult.insertId);
    }
}

module.exports = {
    addPartner
}