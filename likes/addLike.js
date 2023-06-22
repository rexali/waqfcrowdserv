const { transact } = require("../dbase/transact");
const { escapeHTML } = require("../utils/escapeHTML");
/**
 * Add new reply
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const addLike = async (req, res) => {

    const {
        category,
        userId,
        waqfId
    } = req.body;

    const esc = [
        escapeHTML(category),
        escapeHTML(userId),
        escapeHTML(waqfId)
    ];

    const sql = `INSERT INTO likes(
        category, 
        userId,  
        waqfId
        )VALUES(
            ?,
            ?,
            ?
            )`;
            
    res.json(await transact(sql, esc))

}

module.exports = {
    addLike
}