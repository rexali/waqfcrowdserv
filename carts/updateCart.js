const { transact } = require("../dbase/transact");
const { escapeHTML } = require("../utils/escapeHTML");

const updateCart = async (req, res) => {
    const {
        price,
        category,
        createdAt,
        updatedAt,
        userId,
        waqfId,
        causeId,
        projectId
    } = req.body;

    const sql = `update donations 
    set amount = ?,
    set category = ?,
    set createdAt = ?,
    set updatedAt = ?,
    set userId = ?,
    set waqfId = ?,
    set causeId = ?,
    set projectId = ?
    ) where projectId = ?`

    const esc = [
        escapeHTML(price),
        escapeHTML(category),
        escapeHTML(subject),
        escapeHTML(body),
        escapeHTML(createdAt),
        escapeHTML(updatedAt),
        escapeHTML(userId),
        escapeHTML(waqfId),
        escapeHTML(causeId),
        escapeHTML(projectId)
    ];
    res.json(await transact(sql, esc));;
};

module.exports = {
    updateCart
}