const { transact } = require("../dbase/transact");
/**
 * Read a reply
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getDonation = async (req, res) => {
    try {
        const { id } = req.params;

        var page = parseInt(req.query?.page ?? 1);

        var pageSize = 4;

        let startIndex = (page - 1) * pageSize;

        let endIndex = page * pageSize;
        
        const sql = "SELECT * FROM donations where donationId=?";
        const esc = [id];
        let donations = await transact(sql, esc);
        const donationsLength = donations.length;
        donations = donations.slice(startIndex, endIndex);
        res.json(donations.map(donation => ({
            ...donation,
            donationsLength
        })));
    } catch (error) {
        console.warn(error);
    }

}
module.exports = {
    getDonation,
}