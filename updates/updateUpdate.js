const { transact } = require("../dbase/transact");
const { escapeHTML } = require("../utils/escapeHTML");
/**
 * Add new message
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const updateUpdate = async (req, res) => {
    try {
        const {
            title,
            body,
            waqfId,
            updateId
        } = req.body;
        
     const ntitle= escapeHTML(title);
     const nbody = escapeHTML(body);
     const nwaqfId = escapeHTML(waqfId);
     const nupdateId= escapeHTML(updateId);
     
        const esc = [
            ntitle,
            nbody,
            nupdateId,
            nwaqfId
        ];
    
        const sql = `update updates set title = ?, body = ? where updateId = ? and waqfId = ?`;
    
        res.json(await transact(sql, esc)); 
    } catch (error) {
        console.warn(error);
    }
    
}

module.exports = {
    updateUpdate
}