const { transact } = require("../dbase/transact");
const { escapeHTML } = require("../utils/escapeHTML");

/**
 * Search a waqf
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const searchWaqf = async (req, res)=>{
        const term = req.query.term;
        const newTerm = escapeHTML(term);
        const sql = "select * from waqfs where name LIKE '%" + newTerm + "%'";
        const esc =[];
        res.json(await transact(sql,esc));
}

module.exports = {
    searchWaqf
}