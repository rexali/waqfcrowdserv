const { transact } = require("../dbase/transact");
const { escapeHTML } = require("../utils/escapeHTML");
const { removeLike } = require("./removeLike");
/**
 * Add new reply
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const addLike = async (req, res) => {
    try {
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

        const check_esc = [userId, waqfId];

        const checkSQL = `select * from likes where userId=? and waqfId=?`;

        const likes = await transact(checkSQL, check_esc);

        if (likes.length === 0) {
            const sql = `INSERT INTO likes(
            category, 
            userId,  
            waqfId
            )VALUES(
                ?,
                ?, 
                ?
                )`;

            res.json(await transact(sql, esc));
        } else {

            await removeLike(req, res);

        }
    } catch (error) {
        console.warn(error);
    }


}

module.exports = {
    addLike
}