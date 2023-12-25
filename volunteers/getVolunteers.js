const { transact } = require("../dbase/transact");
/**
 * Get all volunteers
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getVolunteers = async (req, res) => {
    try {
        const sql = `select * from volunteers`;
        const esc = [];
        res.json(await transact(sql, esc));
    } catch (error) {
        console.warn(error);
    }

}

module.exports = {
    getVolunteers
}