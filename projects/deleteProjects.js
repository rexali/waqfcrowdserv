const { remove } = require("../dbase/remove");
const { transact } = require("../dbase/transact");

/**
 * Delete projects
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const deleteProjects = async (req, res) => {
    const sql = `delete from projects`;
    const esc = [];
    res.json(await transact(sql,esc))  
};

module.exports = {
    deleteProjects
}