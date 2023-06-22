const { transact } = require("../dbase/transact");
/**
 * Read a reply
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getDonation = async (req, res) => {
    const {id} = req.params
    const sql = "SELECT * FROM donations where donationId=?";
    const esc = [id];
    res.json(await transact(sql, esc));
}

module.exports = {
    getDonation,
}