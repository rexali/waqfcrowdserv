const { transact } = require("../dbase/transact");
/**
 * Read a comment
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getProjectComments = async (req, res) => {

    const {
        id
    } = req.params;

    const esc1 = [id];
    const esc2 = [];


    const commentsSQL = `SELECT comments.commentId, profiles.photo, comments.body from comments 
    left join profiles on comments.userId = profiles.userId where comments.projectId=?`;

    const repliesSQL = `SELECT replies.replyId, replies.commentId, profiles.photo, replies.body from replies 
    left join profiles on replies.userId = profiles.userId;`;
   
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
}

module.exports = {
    getProjectComments,
}