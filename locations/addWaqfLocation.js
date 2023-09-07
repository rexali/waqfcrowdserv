const { transact } = require("../dbase/transact");
const { escapeHTML } = require("../utils/escapeHTML");
/** 
 * Add a new location
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const addWaqfLocation = async (req, res, insertId) => {

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
        waqfId,
        userId
        )VALUES(
            ?,
            ?,
            ?,
            ?,
            ?,
            ?
            )`;

    res.json(await transact(sql, esc));
}

module.exports = {
    addWaqfLocation
}