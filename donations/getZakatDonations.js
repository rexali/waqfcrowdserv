const { transact } = require("../dbase/transact");
/**
 * Read a user's donations
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getZakatDonations = async (req, res) => {
    try {
        const sql = `select donations.category, donations.amount, donations.donationId, users.email from donations 
    join users on users.userId = donations.userId where donations.category=zakat;`;
        const esc = [];
        res.json(await transact(sql, esc));
    } catch (error) {
        console.warn(error);
    }

}

module.exports = {
    getZakatDonations,
}