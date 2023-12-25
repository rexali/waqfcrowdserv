const { transact } = require("../dbase/transact");
const { Mutex } = require("async-mutex");

// create mutex instance
const mutex = new Mutex();
/**  
 * Get a waqf
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getWaqf = async (req, res) => {
    // acquire access to the path to do operation (for race condition)
    const release = await mutex.acquire();
    try {
        const waqfSQL = `select * from waqfs where waqfId=?`;
        const commentSQL = 'select * from comments';
        const updateSQL = 'select * from updates';
        const donationSQL = 'select * from donations';
        const likeSQL = 'select * from likes';


        const waqfId = req.params.id
        const esc = [waqfId];

        let waqfs = await transact(waqfSQL, esc);
        const comments = await transact(commentSQL, esc);
        const donations = await transact(donationSQL, esc);
        const updates = await transact(updateSQL, esc);
        const likes = await transact(likeSQL, esc);



        function getWaqfComments(id) {

            return comments.filter(comment => comment.waqfId === id);
        }
        function getWaqfDonations(id) {

            return donations.filter(donation => donation.waqfId === id);
        }

        function getWaqfUpdates(id) {

            return updates.filter(update => update.waqfId === id);
        }

        function getUserIdLikes(id) {
            return likes.filter(like => like.waqfId === id).map(like => like.userId);
        }

        function getWaqfTotalDonation(id) {
            let totalDonation = donations.filter((item, index) => item.category === "waqf" && item.waqfId === id).map((item, i) => item.amount).reduce((total, num) => total + num, 0);

            return totalDonation;
        }
       
        res.json(waqfs.map((waqf) => ({
            ...waqf,
            commentsNo: getWaqfComments(waqf.waqfId).length,
            donationsNo: getWaqfDonations(waqf.waqfId).length,
            updatesNo: getWaqfUpdates(waqf.waqfId).length,
            totalDonation: getWaqfTotalDonation(waqf.waqfId),
            userIds: getUserIdLikes(waqf.waqfId),
        })));
    } catch (error) {
        console.warn(error);
    } finally {
        // release path for other
        release();
    }

}

module.exports = {
    getWaqf
} 