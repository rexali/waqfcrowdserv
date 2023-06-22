const { transact } = require("../dbase/transact");
/**
 * Read a user's donations
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getUserZakatDonations = async (req, res) => {
    const { id, category } = req.params
    const sql = `select * from donations where donations.userId=? and donations.category=?;`;
    const esc = [id, category];
    res.json(await transact(sql, esc));
}

module.exports = {
    getUserZakatDonations,
}