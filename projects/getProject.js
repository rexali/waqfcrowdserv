const { transact } = require("../dbase/transact");
/**
 * Get a project
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getProject = async(req, res) => {
    const sql = `select * from projects where projectId=?`;
    const projectId = req.params.projectId
    const esc = [projectId];
    res.json(await transact(sql,esc));
}

module.exports = {
    getProject
}