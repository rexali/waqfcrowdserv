const { transact } = require("../dbase/transact");
const { escapeHTML } = require("../utils/escapeHTML");
/**
 * Add new reply
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const updateRating = async (req, res) => {

    const {
        userId,
        waqfId,
        rating
    } = req.body;

    const esc = [
        escapeHTML(rating),
        escapeHTML(userId),
        escapeHTML(waqfId),
    ];

    const updateSQL = `update ratings set rating = ? where userId=? and waqfId=?`;

    res.json(await transact(updateSQL, esc));
}

module.exports = {
    updateRating
}