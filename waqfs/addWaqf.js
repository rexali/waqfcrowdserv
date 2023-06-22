const { transact } = require("../dbase/transact");
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
        rating, 
        image, 
        isDonationAllowed, 
        status, 
        isFeatured, 
        createdAt, 
        updatedAt, 
        endAt, 
        userId  
    } = req.body;

    const sql = `insert into waqfs(
        name, 
        problem, 
        goal, 
        purpose, 
        description, 
        target, 
        collectedAmount, 
        expectedAmount, 
        rating, 
        image, 
        isDonationAllowed, 
        status, 
        isFeatured, 
        createdAt, 
        updatedAt, 
        endAt, 
        userId
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
        ?
        )`;

    const esc = [
        name, 
        problem, 
        goal, 
        purpose, 
        description, 
        target, 
        collectedAmount, 
        expectedAmount, 
        rating, 
        image, 
        isDonationAllowed, 
        status, 
        isFeatured, 
        createdAt, 
        updatedAt, 
        endAt, 
        userId
    ];
    
    res.json(await transact(sql,esc))  

};

module.exports = {
    addWaqf
}