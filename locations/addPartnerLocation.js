const { transact } = require("../dbase/transact");
const { escapeHTML } = require("../utils/escapeHTML");
/** 
 * Add a new location
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const addPartnerLocation = async (req, res, insertId) => {

    try {
        const {
            address,
            localGovt,
            state,
            country, 
            userId
        } = req.body;
    
        const esc = [
            escapeHTML(address),
            escapeHTML(localGovt),
            escapeHTML(state),
            escapeHTML(country),
            insertId,
            escapeHTML(userId)
        ];
    
        const sql = `INSERT INTO locations(
            address,
            localGovt,
            state,
            country,
            partnerId,
            userId
            )VALUES(
                ?,
                ?,
                ?,
                ?,
                ?,
                ?
                )`;
    
        res.json(await transact(sql, esc))
    } catch (error) {
        console.warn(error);
    }
   
}

module.exports = {
    addPartnerLocation
}