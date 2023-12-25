const { transact } = require("../dbase/transact");
const { escapeHTML } = require("../utils/escapeHTML");
/**
 * Add new reply
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const removeSubscription = async (req, res) => {

    try {
        const {
            email
        } = req.body;
    
        const esc = [
            escapeHTML(email),
        ];
    
        const removeSQL = `delete from subscriptions where email=?`;
    
        res.json(await transact(removeSQL, esc));
    } catch (error) {
        console.warn(error);
    }
   
}

module.exports = {
    removeSubscription
}