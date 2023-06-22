const { transact } = require("../dbase/transact");
/**
 * Get all the projects and each related dat 
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getProjects = async (req, res) => {

    const projectSql = `select * from projects`;
    const commentSql = 'select * from comments';
    const shareSql = 'select * from shares';
    const donationSql = 'select * from donations';
    const likeSql = 'select * from likes';

    const esc = [];

    const projects = await transact(projectSql, esc);
    const comments = await transact(commentSql, esc);
    const shares = await transact(shareSql, esc);
    const donations = await transact(donationSql, esc);
    const likes = await transact(likeSql, esc);

    function getPojectComments(id) {

        return comments.filter(comment => comment.projectId === id);
    }

    function getProjectShares(id) {

        return shares.filter(share => share.projectId === id);
    }

    function getProjectDonations(id) {

        return donations.filter(donation => donation.projectId === id);
    }

    function getProjectLikes(id) {

        return likes.filter(like => like.projectId === id);
    }

    res.json(projects.map((project) => ({
        ...project,
        comments: getPojectComments(project.projectId),
        commentsNo: getPojectComments(project.projectId).length,
        likesNo: getProjectLikes(project.projectId).length,
        sharesNo: getProjectShares(project.projectId).length,
        donationsNo: getProjectDonations(project.projectId).length
    })));

};

module.exports = {
    getProjects
}