const { transact } = require("../dbase/transact");
const { escapeHTML } = require("../utils/escapeHTML");
/** 
 * Add a new location
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const updateWaqfLocation = async (fields, res, insertId) => {

    try {
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
    } catch (error) {
        console.warn(error);
    }
    
}

module.exports = {
    updateWaqfLocation
}