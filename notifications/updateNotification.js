const { transact } = require("../dbase/transact");
const { escapeHTML } = require("../utils/escapeHTML");

const updateNotification = async (req, res) => {
    try {
        const {
            subject,
            body,
            notificationId,
        } = req.body;
    
        const sql = `update notifications set subject = ?, body = ? where notificationId = ?`
    
        const esc = [
            escapeHTML(subject),
            escapeHTML(body),
            escapeHTML(notificationId),
        ];
        
        res.json(await transact(sql, esc));
    } catch (error) {
        console.warn(error);
    }
   
};

module.exports = {
    updateNotification
}
