const { transact } = require("../dbase/transact");
const { escapeHTML } = require("../utils/escapeHTML");
/**
 * Add new reply
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const addReply = async (req, res) => {

    const {
        body,
        category,
        userId,
        commentId
    } = req.body;
  
    console.log(req.body);
    const esc = [
        escapeHTML(body),
        escapeHTML(category),
        escapeHTML(userId),
        escapeHTML(commentId)
    ];

    const sql = `INSERT INTO replies(
        body,
        category,
        userId,
        commentId
        )VALUES(
            ?,
            ?,
            ?,
            ?
            )`;
    res.json(await transact(sql, esc))

}

module.exports = {
    addReply
}