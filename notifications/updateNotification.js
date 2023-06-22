const { transact } = require("../dbase/transact");
const { escapeHTML } = require("../utils/escapeHTML");

const updateNotification = async (req, res) => {
    const {
        subject,
        body,
        createdAt,
        updatedAt,
        userId,
    } = req.body;

    const sql = `update projects 
    set subject = ?,
    set body = ?,
    set createdAt = ?, 
    set updatedAt = ?, 
    set userId = ?
    ) where projectId =?`

    const esc = [
        escapeHTML(subject),
        escapeHTML(body),
        escapeHTML(createdAt),
        escapeHTML(updatedAt),
        escapeHTML(userId),
    ];
    res.json(await transact(sql, esc));;
};

module.exports = {
    updateNotification
}