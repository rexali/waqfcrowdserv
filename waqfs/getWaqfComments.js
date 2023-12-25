const { transact } = require("../dbase/transact");
/**
 * Get a waqf comments, replies and number
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getWaqfComments = async (req, res) => {
    try {
        const {
            id
        } = req.params;
    
        const esc1 = [id];
        const esc2 = [];
    
        const commentsSQL = "SELECT * FROM comments where comments.waqfId=?";
    
        const repliesSQL = 'select * from replies';
    
        const comments = await transact(commentsSQL, esc1);
        const replies = await transact(repliesSQL, esc2);
    
        function getCommentReplies(id) {
    
            return replies.filter(reply => reply.commentId === id);
        }
    
        res.json(comments.map((comment) => ({
            ...comment,
            replies: getCommentReplies(comment.commentId),
            repliesNo: getCommentReplies(comment.commentId).length
        })))
    } catch (error) {
        console.warn(error);
    }

}

module.exports = {
    getWaqfComments,
}