const { remove } = require("../dbase/remove");
const { transact } = require("../dbase/transact");

const deleteCauses = async (req, res) => {
    const sql = `delete from projects`;
    const esc = [];
    res.json(await transact(sql,esc))  
};

module.exports = {
    deleteCauses
}