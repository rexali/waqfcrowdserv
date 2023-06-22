const { transact } = require("../dbase/transact");
const { escapeHTML } = require("../utils/escapeHTML");
/**
 * Add new comment
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const addComment = async (req, res) => {

    const {
        body,
        category,
        userId,
        waqfId,
    } = req.body;

    const nBody = escapeHTML(body);
    const nCategory =escapeHTML(category);
    const nUserId=escapeHTML(userId);
    const nWaqfId = escapeHTML(waqfId);

    const esc = [
        nBody,
        nCategory,
        nUserId,
        nWaqfId  
    ];

    let sql = `INSERT INTO comments(
        body,
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
    addComment
}