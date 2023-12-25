const { transact } = require("../dbase/transact");
/**
 * Read a comment
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getCommentReplies = async (req, res) => {
    
    try {
        const {
            id
        } = req.params;
    
        const sql = "select * from replies where replies.commentId = ?";
        const esc = [id];
        res.json(await transact(sql, esc));
    } catch (error) {
        console.warn(error);
    }
   
}

module.exports = {
    getCommentReplies,
}