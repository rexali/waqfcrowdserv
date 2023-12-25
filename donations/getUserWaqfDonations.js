const { transact } = require("../dbase/transact"); 
/**
 * Read a user's donations
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getUserWaqfDonations = async (req, res) => {
    try {
        const {id} = req.params
        const sql = `select waqfs.waqfId, waqfs.name, waqfs.status, waqfs.createdAt, donations.category, donations.amount, 
        donations.donationId, users.email from waqfs join donations on waqfs.waqfid = donations.waqfId join users on users.userId = donations.userId where donations.userId=?`;
        const esc = [id];
        res.json(await transact(sql, esc));  
    } catch (error) {
        console.warn(error);
    }
   
}

module.exports = {
    getUserWaqfDonations,
}