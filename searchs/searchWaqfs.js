const { transact } = require("../dbase/transact");
const { searchData } = require("../services/searchData");
const { escapeHTML } = require("../utils/escapeHTML");

/**
 * Search a waqf
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const searchWaqf = async (req, res) => {
    const term = req.query.term;
    const newTerm = escapeHTML(term);
    console.log(term);
    // const sql = "select * from waqfs where name LIKE '%" + newTerm + "%'";
    // const esc =[];
    // res.json(await transact(sql,esc));
    const waqfSQL = "select waqfs.waqfId, waqfs.name, waqfs.problem, waqfs.goal,waqfs.purpose, waqfs.description,waqfs.target, waqfs.collectedAmount, waqfs.expectedAmount,waqfs.planPDF, waqfs.image,waqfs.isDonationAllowed, waqfs.status, waqfs.createdAt, waqfs.endAt, locations.address, locations.localGovt, locations.state,locations.country from waqfs join locations on waqfs.waqfId = locations.waqfId where waqfs.name LIKE '%" + newTerm + "%'";

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

    res.json(searchData(waqfs.map((waqf) => ({
        ...waqf,
        comments: getWaqfComments(waqf.waqfId),
        commentsNo: getWaqfComments(waqf.waqfId).length,
        likesNo: getWaqfLikes(waqf.waqfId).length,
        sharesNo: getWaqfShares(waqf.waqfId).length,
        donationsNo: getWaqfDonations(waqf.waqfId).length
    }))));
}

module.exports = {
    searchWaqf
}