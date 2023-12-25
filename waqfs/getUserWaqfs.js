const { transact } = require("../dbase/transact");
/**
 * Get all the waqfs and each related data 
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getUserWaqfs = async (req, res) => {
    
    try {
        const {id} = req.params;

    const waqf_esc = [id];
    const esc = [];

    const waqfSQL = `select * from waqfs where userId = ?`;
    // const waqfSQL = `select waqfs.waqfId, waqfs.name, waqfs.problem, waqfs.goal,waqfs.purpose, 
    // waqfs.description,waqfs.target, waqfs.type, waqfs.collectedAmount, waqfs.expectedAmount,waqfs.planPDF, waqfs.image,waqfs.isDonationAllowed, waqfs.status, waqfs.createdAt, waqfs.endAt, 
    // locations.address, locations.localGovt, locations.state,locations.country from waqfs join 
    // locations on waqfs.waqfId = locations.waqfId where locations.userId = ?`;
    const commentSQL = 'select * from comments';
    const shareSQL = 'select * from shares';
    const donationSQL = 'select * from donations';
    const likeSQL = 'select * from likes';

    const waqfs = await transact(waqfSQL, waqf_esc);
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
    } catch (error) {
        console.warn(error);
    }
    
};

module.exports = {
    getUserWaqfs
}