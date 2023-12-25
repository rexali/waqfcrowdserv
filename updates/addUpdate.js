const { transact } = require("../dbase/transact");
const { escapeHTML } = require("../utils/escapeHTML"); 
/**
 * Add new message
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const addUpdate = async (req, res) => {
 
    try {
        const {
            title,
            body,
            userId,
            waqfId
        } = req.body;
        
     const ntitle= escapeHTML(title);
     const nbody = escapeHTML(body);
     const nuserId = escapeHTML(userId);
     const nwaqfId = escapeHTML(waqfId);
     
        const esc = [
            ntitle,
            nbody,
            nuserId,
            nwaqfId
        ];
    
        const sql = `INSERT INTO updates (title, body, userId, waqfId) VALUES(?,?,?,?)`;
    
        res.json(await transact(sql, esc));
        
    } catch (error) {
        console.warn(error);
    }
    
}

module.exports = {
    addUpdate
}