const { transact } = require("../dbase/transact");
/**
 * Read donations
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getDonations = async (req, res) => {

    try {
        const waqf_sql = `select waqfs.waqfId, waqfs.name, waqfs.status, waqfs.createdAt, donations.category, donations.amount, 
        donations.donationId, users.email from waqfs join donations on waqfs.waqfid = donations.waqfId 
        join users on users.userId = donations.userId`;
    
        const zakat_sql = `select donations.category, donations.amount, donations.donationId, users.email from donations 
        join users on users.userId = donations.userId where donations.category='zakat';`;
    
        const esc = [];

        const waqfDonations = await transact(waqf_sql, esc);
        const zakatDonations = await transact(zakat_sql, esc);
        res.json({ waqfDonations, zakatDonations });
    } catch (error) {
        console.warn(error);
    }
   


}

module.exports = {
    getDonations,
}