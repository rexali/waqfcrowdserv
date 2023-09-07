const { transact } = require("../dbase/transact");
const { addFiles } = require("../files/addFiles");
const {handleFiles } = require("../files/fileHandlers");
const { addWaqfLocation } = require("../locations/addWaqfLocation");
/**
 * Add a waqf
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const addWaqf = async (req, res) => {
    
    const {
        name, 
        problem, 
        goal, 
        purpose, 
        description, 
        target, 
        collectedAmount, 
        expectedAmount, 
        planPDF, 
        image, 
        status, 
        endAt, 
        userId, 
        type, 
        beneficiary, 
        partner, 
        deedPDF, 
        video, 
        startAt
    } = req.body;

    const esc = [
        name, 
        problem, 
        goal, 
        purpose, 
        description, 
        target, 
        collectedAmount, 
        expectedAmount, 
        planPDF, 
        image, 
        status, 
        endAt, 
        userId, 
        type, 
        beneficiary, 
        partner, 
        deedPDF, 
        video, 
        startAt
    ];

    
    const sql = `insert into waqfs(
        name, 
        problem, 
        goal, 
        purpose, 
        description, 
        target, 
        collectedAmount, 
        expectedAmount, 
        planPDF, 
        image, 
        status, 
        endAt, 
        userId, 
        type, 
        beneficiary, 
        partner, 
        deedPDF, 
        video, 
        startAt,
        isDonationAllowed,
        isFeatured
    )values(
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        'yes',
        'no'
        )`;

    let waqfResult = await transact(sql, esc);
    if (waqfResult.affectedRows === 1 && waqfResult.insertId) {
        await addWaqfLocation(req, res, waqfResult.insertId);
    }
};

module.exports = {
    addWaqf
}