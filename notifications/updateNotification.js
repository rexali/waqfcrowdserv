const { transact } = require("../dbase/transact");
const { escapeHTML } = require("../utils/escapeHTML");

const updateNotification = async (req, res) => {
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
    
    res.json(await transact(sql, esc));;
};

module.exports = {
    updateNotification
}
