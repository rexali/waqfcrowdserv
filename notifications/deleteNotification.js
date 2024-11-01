const { transact } = require("../dbase/transact");
/**
 * Read replies
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const deleteNotification = async(req, res) => {
    try {
        const {notificationId}= req.body;
        const sql = "delete from notifications where notificationId = ?";
        const esc = [notificationId];
        res.json(await transact(sql, esc)); 
    } catch (error) {
        console.warn(error);
    }
    
}

module.exports = {
    deleteNotification,
}