const { transact } = require("../dbase/transact");
/**
 * Get all beneficiaries
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getBeneficiaries = async (req, res) => {
    try {
        // prepare sql
        const sql = `select * from beneficiaries`;
        // escape data
        const esc = [];
        // get and emit all beneficiaries
        res.json(await transact(sql, esc));
    } catch (error) {
        // print error
        console.warn(error);
    }

}

module.exports = {
    getBeneficiaries
}