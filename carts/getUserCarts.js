const { transact } = require("../dbase/transact");
/**
 * Read a reply
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getUserCarts = async (req, res) => {
    const { id } = req.params;
    const esc = [id];

    const sql = `select 
    users.userId, 
    carts.cartId, 
    carts.price, 
    projects.name, 
    projects.image 
    from users 
    join carts on users.userId = carts.userId 
    join projects on projects.projectId=carts.projectId where users.userId =?;`;

    res.json(await transact(sql, esc));
}

module.exports = {
    getUserCarts,
}