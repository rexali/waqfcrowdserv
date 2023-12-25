const { transact } = require("../dbase/transact");
/**
 * Read a reply
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getReply = async (req, res) => {
    try {
        const {id} = req.params
    const sql = "SELECT * FROM replies where replyId=?";
    const esc = [id];
    res.json( await transact(sql, esc));
    } catch (error) {
       console.warn(error); 
    } 
}

module.exports = {
    getReply,
}