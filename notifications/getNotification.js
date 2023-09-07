const { transact } = require("../dbase/transact");
/**
 * Read a reply
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getNotification = async (req, res) => {
    const {id} = req.params
    const sql = "SELECT * FROM notifications where notificationId=?";
    const esc = [id];
    res.json(await transact(sql, esc));
}

module.exports = {
    getNotification,
}