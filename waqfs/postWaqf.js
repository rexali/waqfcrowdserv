const { addWaqfFormFilesAndFields } = require("./addWaqfFormFilesAndFields");
/**
 * Add a waqf
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const postWaqf = async (req, res) => {
    try {
        addWaqfFormFilesAndFields(req,res);
    } catch (error) {
       console.warn(error); 
    }
  
};

module.exports = {
    postWaqf
}