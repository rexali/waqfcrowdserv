const { transact } = require("../dbase/transact");
const { escapeHTML } = require("../utils/escapeHTML");
/**
 * Add new reply
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const updateHelp = async (req, res) => {

    try {
        const {
            question,
            answer,
            userId,
            helpId
        } = req.body;
    
        const esc = [
            escapeHTML(question),
            escapeHTML(answer),
            escapeHTML(userId),
            helpId
        ];
    
        const sql = `update helps set question = ?, answer = ?, userId =?  where helpId = ? `;
    
        res.json(await transact(sql, esc));
    } catch (error) {
     console.warn(error);   
    }
    
}

module.exports = {
    updateHelp
}