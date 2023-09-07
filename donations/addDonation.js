const { transact } = require("../dbase/transact");
const { escapeHTML } = require("../utils/escapeHTML");
/**
 * Add new reply 
 * @param {object} req - user request
 * @param {object} res - response to user request 
 */
const addDonation = async (req, res) => {
    const {
        amount,
        category,
        userId,
        waqfId,
        item
    } = req.body;

    function makeRawJSON(data) {
        let raw = []
        data.forEach(element => {
            raw.push(`{
                "amount": "${element.price}",
                "category": "${element.category}",
                "userId": "${userId}",
                "waqfId": "${element.waqfId}"
            }`);
        });

        return raw;
    }

    const raw1 = `[{
        "amount": "${amount}", 
        "category": "${category}", 
        "userId": "${userId}",  
        "waqfId": "${waqfId}"
    }]`;

    const raw2 = `[${makeRawJSON(item)}]`; 

    const esc = [
        escapeHTML(amount),
        escapeHTML(category),
        escapeHTML(userId),
        escapeHTML(waqfId),
        raw2
    ];

    const sql = `INSERT INTO donations(
        amount, 
        category, 
        userId,  
        waqfId,
        item
        )VALUES(
            ?,
            ?,
            ?,
            ?,
            ?
            )`;
    // json_object('amount', ${data.price}, 'category',  ${category}, 'userId',  ${data.userId}, 'waqfId',  ${data.waqfId})
    res.json(await transact(sql, esc))

}

module.exports = {
    addDonation
}