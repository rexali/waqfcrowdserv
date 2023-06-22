const { transact } = require("../dbase/transact");

const getCause = async(req, res) => {
    const sql = `select * from projects where projectId=?`;
    const projectId = req.params.projectId
    const esc = [projectId];
    res.json(await transact(sql,esc));
}

module.exports = {
    getCause
}