const { transact } = require("../dbase/transact");
/**
 * Get all beneficiaries
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getBeneficiaries = async (req, res)=>{
    const sql = `select * from beneficiaries`;
    const esc = [];
    res.json(await transact(sql,esc));  
}

module.exports = {
    getBeneficiaries
}