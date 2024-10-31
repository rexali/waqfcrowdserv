const { transact } = require("../dbase/transact");
/**
 * Read a user's donations
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getUserZakatDonations = async (req, res) => {
    try {
        const { id, category } = req.params
        const sql = `select donations.category, donations.amount, donations.donationId, users.email from donations 
        join users on users.userId = donations.userId where donations.userId=? and donations.category=?;`;
        const esc = [id, category];
        res.json(await transact(sql, esc));  
    } catch (error) {
     console.warn(error);   
    }
    
}

module.exports = {
    getUserZakatDonations,
}