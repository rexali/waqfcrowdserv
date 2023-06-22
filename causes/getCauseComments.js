const { transact } = require("../dbase/transact");
/**
 * Read a comment
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getCausesComments = async (req, res) => {
    const {
        id
    } = req.params;

    const esc = [id];

    const commentsSQL = "SELECT * FROM comments where comments.causeId=?";

    const repliesSQL = 'select * from replies';

    const comments = await transact(commentsSQL, esc);
    const replies = await transact(repliesSQL, esc);

    function getCommentReplies(id) {

        return replies.filter(reply => reply.causeId === id);
    }

    res.json(comments.map((comment) => ({ 
        ...comment,
        replies: getCommentReplies(comment.commentId),
        repliesNo: getCommentReplies(comment.commentId).length 
    })))
}

module.exports = {
    getCausesComments,
}