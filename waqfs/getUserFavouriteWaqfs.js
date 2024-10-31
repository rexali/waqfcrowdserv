const { transact } = require("../dbase/transact");
/** 
 * Get all the waqfs and each related data 
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getUserFavouriteWaqfs = async (req, res) => {
    try {
        const { id } = req.params;

        var page = parseInt(req.query?.page ?? 1);

        var pageSize = 4;

        let startIndex = (page - 1) * pageSize;

        let endIndex = page * pageSize;

        const waqf_esc = [id];

        const esc = [];

        const waqfSQL = `select * from waqfs join likes on likes.waqfId = waqfs.waqfId where likes.userId=?`;
        // const waqfSQL = `select distinct waqfs.waqfId, waqfs.name, waqfs.problem, waqfs.goal,waqfs.purpose, 
        // waqfs.description,waqfs.target, waqfs.collectedAmount, waqfs.expectedAmount,waqfs.planPDF, waqfs.image,waqfs.isDonationAllowed, waqfs.status, waqfs.createdAt, waqfs.endAt, 
        // locations.address,locations.localGovt, locations.state,locations.country from waqfs join 
        // locations on waqfs.waqfId = locations.waqfId join likes on likes.waqfId = waqfs.waqfId where likes.userId=?;`;

        const commentSQL = 'select * from comments';
        const shareSQL = 'select * from shares';
        const donationSQL = 'select * from donations';
        const likeSQL = 'select * from likes';
        const ratingSQL = 'select * from ratings';
        const updateSQL = 'select * from updates';

        let waqfs = await transact(waqfSQL, waqf_esc);
        const waqfsNo = waqfs.length;
        waqfs = waqfs.slice(startIndex, endIndex);
        const comments = await transact(commentSQL, esc);
        const shares = await transact(shareSQL, esc);
        const donations = await transact(donationSQL, esc);
        const likes = await transact(likeSQL, esc);
        const ratings = await transact(ratingSQL, esc);
        const updates = await transact(updateSQL, esc);



        function getWaqfComments(id) {

            return comments.filter(comment => comment.waqfId === id);
        }

        function getWaqfUpdates(id) {

            return updates.filter(update => update.waqfId === id);
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


        function getUserIdLikes(id) {
            return likes.filter(like => like.waqfId === id).map(like => like.userId);
        }

        function getAvgRatings(id) {
            let waqfRatings = ratings.filter((item) => item.waqfId === id);
            const totalRatings = waqfRatings?.reduce((total, item) => total + item.rating, 0);
            return (totalRatings / (waqfRatings.length ? waqfRatings.length : 1));
        }

        function getWaqfTotalDonation(id) {
            let totalDonation = donations.filter((item, index) => item.category === "waqf" && item.waqfId === id).map((item, i) => item.amount).reduce((total, num) => total + num, 0);

            return totalDonation;
        }

        res.json(waqfs.map((waqf) => ({
            ...waqf,
            comments: getWaqfComments(waqf.waqfId),
            commentsNo: getWaqfComments(waqf.waqfId).length,
            likesNo: getWaqfLikes(waqf.waqfId).length,
            sharesNo: getWaqfShares(waqf.waqfId).length,
            donationsNo: getWaqfDonations(waqf.waqfId).length,
            totalDonation: getWaqfTotalDonation(waqf.waqfId),
            updatesNo: getWaqfUpdates(waqf.waqfId).length,
            ratingsNo: getAvgRatings(waqf.waqfId),
            userIds: getUserIdLikes(waqf.waqfId),
            waqfsNo: waqfsNo,
        })));
    } catch (error) {
        console.warn(error);
    }

};

module.exports = {
    getUserFavouriteWaqfs
}