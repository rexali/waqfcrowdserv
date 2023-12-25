const { transact } = require("../dbase/transact");
const { escapeHTML } = require("../utils/escapeHTML");
const { removeSubscription } = require("./removeSubscription");
/**
 * Add new reply
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const addSubscription = async (req, res) => {
    try {
        const {
            email,
        } = req.body;

        const esc = [
            escapeHTML(email),
        ];

        const sql = `INSERT INTO subscriptions(
            email
            )VALUES(
                ?
                )`;

        res.json(await transact(sql, esc));

    } catch (error) {
        console.warn(error);
    }

}

module.exports = {
    addSubscription
}