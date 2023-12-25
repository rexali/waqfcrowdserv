const { transact } = require("../dbase/transact");
/**
 * Read replies
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const deleteDonation = async(req, res) => {
    try {
        const {id}= req.body;
        const sql = "delete from donations where donationId = ?";
        const esc = [id];
        res.json(await transact(sql, esc));
    } catch (error) {
        console.warn(error);
    }
   
}

module.exports = {
    deleteDonation,
}