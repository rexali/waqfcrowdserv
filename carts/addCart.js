const { transact } = require("../dbase/transact");
const { escapeHTML } = require("../utils/escapeHTML");
/**
 * Add new reply
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const addCart = async (req, res) => {

    const {
        price,
        category,
        userId,
        waqfId
    } = req.body;
    
    const esc = [
        escapeHTML(price),
        escapeHTML(category),
        escapeHTML(userId),
        escapeHTML(waqfId)
    ];

    const sql = `INSERT INTO carts(
        price, 
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
    addCart
}