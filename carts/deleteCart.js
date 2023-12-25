const { transact } = require("../dbase/transact");
/**
 * Read replies 
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const deleteCart = async(req, res) => {
    try {
        const {id}= req.params;
        console.log(id);
        const sql = "delete from carts where cartId = ?";
        const esc = [id];
        res.json(await transact(sql, esc));
    } catch (error) {
        console.warn(error);
    }   
}

module.exports = {
    deleteCart,
}