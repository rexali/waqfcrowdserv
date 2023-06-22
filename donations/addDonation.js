const { transact } = require("../dbase/transact");
const { escapeHTML } = require("../utils/escapeHTML");
/**
 * Add new reply 
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const addDonation = async (req, res) => {

    const {
        amount,
        category,
        userId,
        waqfId
    } = req.body;

    const esc = [
        escapeHTML(amount),
        escapeHTML(category),
        escapeHTML(userId),
        escapeHTML(waqfId)
    ];

    const sql = `INSERT INTO donations(
        amount, 
        category, 
        userId,  
        waqfId
        )VALUES(
            ?,
            ?,
            ?,
            ?
            )`;
            
    res.json(await transact(sql, esc))

}

module.exports = {
    addDonation
}