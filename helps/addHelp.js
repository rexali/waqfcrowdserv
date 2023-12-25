const { transact } = require("../dbase/transact");
const { escapeHTML } = require("../utils/escapeHTML"); 
/**
 * Add new help
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const addHelp = async (req, res) => {

    try {
        const {
            question,
            answer,
            userId
        } = req.body;
    
        const esc = [
            escapeHTML(question),
            escapeHTML(answer),
            escapeHTML(userId),
        ];
    
            const sql = `INSERT INTO helps(
                question, 
                answer,  
                userId
                )VALUES(
                    ?,
                    ?, 
                    ?
                    )`;
    
            res.json(await transact(sql, esc));
    } catch (error) {
        console.warn(error);
    }
   
}

module.exports = {
    addHelp
}