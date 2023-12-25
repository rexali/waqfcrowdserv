const { transact } = require("../dbase/transact");
/**
 * Read replies
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getNotifications = async(req, res) => {
    try {
        const sql = "SELECT * FROM notifications";
        const esc = [];
        res.json(await transact(sql, esc)); 
    } catch (error) {
        console.warn(error);  
    }
    
}

module.exports = {
    getNotifications,
}