const { transact } = require("../dbase/transact");
/**
 * Read replies
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getDonations = async(req, res) => {
    const sql = "SELECT * FROM donationss";
    const esc = [];
    res.json(await transact(sql, esc));
}

module.exports = {
    getDonations,
}