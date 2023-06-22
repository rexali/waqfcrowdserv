const { transact } = require("../dbase/transact");
/**
 * Read a comment
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getComments = async(req, res) => {
    const {
        id
    } = req.params;
    
    const sql = "SELECT * FROM comments";

    const esc = [id];
    res.json(await transact(sql, esc))
}

module.exports = {
    getComments,
}