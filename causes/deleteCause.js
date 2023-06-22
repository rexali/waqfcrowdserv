const { transact } = require("../dbase/transact");

const deleteCause = async (req, res) => {
    const sql = `delete from causes where causeId=?`;
    const causeId = req.params.causeId
    const esc = [causeId];
    res.json(await transact(sql,esc))  
};

module.exports = {
    deleteCause
}