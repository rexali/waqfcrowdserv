const { transact } = require("../dbase/transact");
/**
 * Read a reply
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getDonation = async (req, res) => {
    try {
        const {id} = req.params
        const sql = "SELECT * FROM donations where donationId=?";
        const esc = [id];
        res.json(await transact(sql, esc));
    } catch (error) {
        console.warn(error);
    }

}
module.exports = { 
    getDonation,
}