const { transact } = require("../dbase/transact");
/**
 * Get all the waqfs and each related dat 
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getWaqfs = async (req, res) => {

    const waqfSQL = `select waqfs.waqfId, waqfs.name, waqfs.problem, waqfs.goal,waqfs.purpose, 
    waqfs.description,waqfs.target, waqfs.collectedAmount, waqfs.expectedAmount,waqfs.planPDF, 
    waqfs.rating, waqfs.image,waqfs.isDonationAllowed, waqfs.status, waqfs.createdAt, waqfs.endAt, 
    locations.address, locations.localGovt, locations.state,locations.country  from waqfs join 
    locations on waqfs.waqfId = locations.waqfId;`;
    
    const commentSQL = 'select * from comments';
    const shareSQL = 'select * from shares';
    const donationSQL = 'select * from donations';
    const likeSQL = 'select * from likes';

    const esc = [];

    const waqfs = await transact(waqfSQL, esc);
    const comments = await transact(commentSQL, esc);
    const shares = await transact(shareSQL, esc);
    const donations = await transact(donationSQL, esc);
    const likes = await transact(likeSQL, esc);

    function getWaqfComments(id) {

        return comments.filter(comment => comment.waqfId === id);
    }

    function getWaqfShares(id) {

        return shares.filter(share => share.waqfId === id);
    }

    function getWaqfDonations(id) {

        return donations.filter(donation => donation.waqfId === id);
    }

    function getWaqfLikes(id) {

        return likes.filter(like => like.waqfId === id);
    }

    res.json(waqfs.map((waqf) => ({
        ...waqf,
        comments: getWaqfComments(waqf.waqfId),
        commentsNo: getWaqfComments(waqf.waqfId).length,
        likesNo: getWaqfLikes(waqf.waqfId).length,
        sharesNo: getWaqfShares(waqf.waqfId).length,
        donationsNo: getWaqfDonations(waqf.waqfId).length
    })));
};

module.exports = {
    getWaqfs
}