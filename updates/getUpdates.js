const { transact } = require("../dbase/transact");
/**
 * Read message
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getUpdates = async (req, res) => {
    const sql = `select updates.updateId, updates.userId, updates.title, updates.body, 
    users.email from updates join users on users.userId = updates.userId`;
    const esc = [];
    res.json(await transact(sql, esc));
}

module.exports = {
    getUpdates,
}