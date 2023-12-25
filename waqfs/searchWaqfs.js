const { transact } = require("../dbase/transact");
const { escapeHTML } = require("../utils/escapeHTML");
const { Mutex } = require("async-mutex");

// create mutex instance
const mutex = new Mutex();
/**
 * Search a waqf
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const searchWaqf = async (req, res) => {
    // acquire access to the path to do operation (for race condition)
    const release = await mutex.acquire();
    try {
        const term = req.query.term;
        var page = parseInt(req.query.page);
        console.log(term);
        var pageSize = 4;
        let startIndex = (page - 1) * pageSize;
        let endIndex = page * pageSize;

        const newTerm = escapeHTML(term);
        const sql = "select * from waqfs where name LIKE '%" + newTerm + "%'";
        const esc = [];
        const result = await transact(sql, esc);
        result = result.slice(startIndex, endIndex);
        res.json(result);
    } catch (error) {
        console.warn(error);
    } finally {
        // release path for other
        release();
    }

}
module.exports = {
    searchWaqf
}