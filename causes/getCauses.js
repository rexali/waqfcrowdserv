const { transact } = require("../dbase/transact");
/**
 * Get all the causes and each related dat 
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getCauses = async (req, res) => {
    
    const causesSQL = `select * from causes`;
    const commentSQL = 'select * from comments';
    const shareSQL = 'select * from shares';
    const donationSQL = 'select * from donations';
    const likeSQL = 'select * from likes';

    const esc = [];

    const causes = await transact(causesSQL, esc);
    const comments = await transact(commentSQL, esc);
    const shares = await transact(shareSQL, esc);
    const donations = await transact(donationSQL, esc);
    const likes = await transact(likeSQL, esc);


    function getPojectComments(id) {

        return comments.filter(comment => comment.causeId === id);
    }

    function getProjectShares(id) {

        return shares.filter(share => share.causeId === id);
    }

    function getProjectDonations(id) {

        return donations.filter(donation => donation.causeId === id);
    }

    function getProjectLikes(id) {

        return likes.filter(like => like.causeId === id);
    }


    res.json(causes.map((cause) => ({
        ...cause,
        comments:getPojectComments(cause.causeId),
        commentsNo: getPojectComments(cause.causeId).length,
        likesNo: getProjectLikes(cause.causeId).length,
        sharesNo: getProjectShares(cause.causeId).length,
        donationsNo: getProjectDonations(cause.causeId).length
    })));

};

module.exports = {
    getCauses
}