const { transact } = require("../dbase/transact");
/**
 * Read replies
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const deleteNotification = async(req, res) => {
    const {id}= req.body;
    const sql = "delete from notifications where notificationId = ?";
    const esc = [id];
    res.json(await transact(sql, esc));
}

module.exports = {
    deleteNotification,
}