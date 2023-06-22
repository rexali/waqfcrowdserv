const { transact } = require("../dbase/transact");

/**
 * Search all users
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const searchProfiles = async (req, res)=>{
        const term = req.query.term;
        const sql = "select * from users where name LIKE '%" + term + "%'";
        const esc =[];
        res.json(await transact(sql,esc));   
}

module.exports = {
    searchProfiles
}