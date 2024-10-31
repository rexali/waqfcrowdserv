const { transact } = require("../dbase/transact");
/**
 * Read replies
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getNotifications = async(req, res) => {
    try {
        var page = parseInt(req.query?.page ?? 1);
        var pageSize = 4;
        let startIndex = (page - 1) * pageSize;
        let endIndex = page * pageSize;
        const sql = "SELECT * FROM notifications";
        const esc = [];
        let notifications = await transact(sql, esc);
        notifications = notifications.slice(startIndex, endIndex);

        res.json(notifications.map(notification => ({
            ...notification,
            notificationsLength: notifications.length,
        })));
    } catch (error) {
        console.warn(error);  
    }
    
}

module.exports = {
    getNotifications,
}