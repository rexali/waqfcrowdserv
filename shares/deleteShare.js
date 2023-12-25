const { transact } = require("../dbase/transact");
/**
 * Read replies 
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const deleteShare = async(req, res) => {
    try {
        const {id}= req.params;
        const sql = "delete from shares where shares.shareId = ?";
        const esc = [id];
        res.json(await transact(sql, esc));
    } catch (error) {
        console.warn(error);
    }
   
}

module.exports = {
    deleteShare,
}