const { transact } = require("../dbase/transact");
const { escapeHTML } = require("../utils/escapeHTML");
/** 
 * Add a new location
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const updateWaqfLocation = async (fields, res, insertId) => {

    const {
        address,
        localGovt,
        state,
        country,
        userId
    } = fields;

    const esc = [
        escapeHTML(address),
        escapeHTML(localGovt),
        escapeHTML(state),
        escapeHTML(country),
        escapeHTML(userId),
        insertId
    ];

    const sql = `update locations set address = ?, localGovt=?, state=?, country=?, userId=? where waqfId = ?`;

    return await transact(sql, esc);
}

module.exports = {
    updateWaqfLocation
}