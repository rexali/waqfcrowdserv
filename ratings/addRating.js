const { transact } = require("../dbase/transact");
const { escapeHTML } = require("../utils/escapeHTML");
const { updateRating } = require("./updateRating");
/**
 * Add new rating
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const addRating = async (req, res) => {
    try {
        const {
            rating,
            userId,
            waqfId
        } = req.body;

        const esc = [
            escapeHTML(rating),
            escapeHTML(userId),
            escapeHTML(waqfId)
        ];

        const check_esc = [userId, waqfId];

        const checkSQL = `select * from ratings where userId=? and waqfId=?`;

        const likes = await transact(checkSQL, check_esc);

        if (likes.length === 0) {
            const sql = `INSERT INTO ratings(
                rating,
                userId,  
                waqfId
                )VALUES(
                    ?,
                    ?,
                    ?
                    )`;

            res.json(await transact(sql, esc));
        } else {

            await updateRating(req, res);
        }
    } catch (error) {
        console.warn(error);
    }
}

module.exports = {
    addRating
}