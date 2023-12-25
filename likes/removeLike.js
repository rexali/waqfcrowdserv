const { transact } = require("../dbase/transact");
const { escapeHTML } = require("../utils/escapeHTML");
/**
 * Add new reply
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const removeLike = async (req, res) => {

    try {
        const {
            userId,
            waqfId
        } = req.body;
    
        const esc = [
            escapeHTML(userId),
            escapeHTML(waqfId)
        ];
    
        const removeSQL = `delete from likes where userId=? and waqfId=?`;
    
        res.json(await transact(removeSQL, esc));
    } catch (error) {
        console.warn(error);
    }
   
}

module.exports = {
    removeLike
}