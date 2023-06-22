const { transact } = require("../dbase/transact"); 
/**
 * Read a user's donations
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getUserWaqfDonations = async (req, res) => {
    const {id} = req.params
    const sql = `select waqfs.name, waqfs.status, waqfs.createdAt, donations.category, donations.amount, 
    donations.donationId from waqfs join donations on waqfs.waqfid = donations.waqfId where donations.userId=?`;
    const esc = [id];
    res.json(await transact(sql, esc));
}

module.exports = {
    getUserWaqfDonations,
}