const { transact } = require("../dbase/transact");
/**
 * Read donations
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getDonations = async (req, res) => {

    try {
        var page = parseInt(req.query?.page ?? 1);
        var pageSize = 4;
        let startIndex = (page - 1) * pageSize;
        let endIndex = page * pageSize; 

        const sql = `SELECT donations.category, donations.amount, users.email FROM donations join users on users.userId = donations.userId`;

        // const waqf_sql = `select waqfs.waqfId, waqfs.name, waqfs.createdAt, donations.category, donations.amount, 
        // donations.donationId, users.email from waqfs join donations on waqfs.waqfid = donations.waqfId 
        // join users on users.userId = donations.userId`;

        // const zakat_sql = `select donations.category, donations.amount, donations.donationId, users.email from donations 
        // join users on users.userId = donations.userId where donations.category='zakat';`;

        const esc = [];
        
        let donations = await transact(sql, esc);
        let waqfDonations = donations.filter(donation => donation.category === 'waqf');
        const waqfDonationsLength = waqfDonations.length;

        waqfDonations = waqfDonations.slice(startIndex, endIndex).map(waqfDonation => ({
            ...waqfDonation,
            waqfDonationsLength: waqfDonationsLength
        }));

        let zakatDonations = donations.filter(donation => donation.category === 'zakat');
        const zakatDonationsLength = zakatDonations.length;
        zakatDonations = zakatDonations.slice(startIndex, endIndex).map(zakatDonation => ({
            ...zakatDonation,
            zakatDonationsLength: zakatDonationsLength
        }))

        // let waqfDonations = await transact(waqf_sql, esc);
        // const waqfDonationsLength = waqfDonations.length;
        // waqfDonations = waqfDonations.slice(startIndex, endIndex).map(waqfDonation => ({
        //     ...waqfDonation,
        //     waqfDonationsLength: waqfDonationsLength
        // }));

        // let zakatDonations = await transact(zakat_sql, esc);
        // const zakatDonationsLength = zakatDonations.length;
        // zakatDonations = zakatDonations.slice(startIndex, endIndex).map(zakatDonation=>({
        //     ...zakatDonation,
        //     zakatDonationsLength:zakatDonationsLength
        // }))
        
        res.json({ waqfDonations, zakatDonations });
    } catch (error) {
        console.warn(error);
    }



}

module.exports = {
    getDonations,
}