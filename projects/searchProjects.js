const { transact } = require("../dbase/transact");
const { escapeHTML } = require("../utils/escapeHTML");

/**
 * Search a project
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const searchProjects = async (req, res)=>{
        const term = req.query.term;
        const newTerm = escapeHTML(term);
        const sql = "select * from projects where name LIKE '%" + newTerm + "%'";
        const esc =[];
        res.json(await transact(sql,esc));
}

module.exports = {
    searchProjects
}