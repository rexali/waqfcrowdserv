/**
 * Add new profile
 * @param {object} req - user request
 * @param {object} res - response to user request
 */

const { addProfileFormFileAndFields } = require("./addProfileFormFileAndFields");

const submitProfile = async (req, res) => {
    try {
        // add a form file and fields
        addProfileFormFileAndFields(req,res);
    } catch (error) {
        console.warn(error);
    }
};

module.exports = {
    submitProfile
}