const { transact } = require("../dbase/transact");
const { escapeHTML } = require("../utils/escapeHTML");

const searchCauses = async (req, res)=>{
        const term = req.query.term;
        const newTerm = escapeHTML(term);
        const sql = "select * from causes where name LIKE '%" + newTerm + "%'";
        const esc =[];
        res.json(await transact(sql,esc));
}

module.exports = {
    searchCauses
}