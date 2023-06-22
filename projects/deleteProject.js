const { transact } = require("../dbase/transact");
/**
 * Delete a project
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const deleteProject = async (req, res) => {
    const sql = `delete from projects where projectId=?`;
    const projectId = req.params.projectId
    const esc = [projectId];
    res.json(await transact(sql,esc))  
};

module.exports = {
    deleteProject
}