const { transact } = require("../dbase/transact");

/**
 * Update a waqf
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const updateWaqf = async (req, res) => {
    
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

    const sql = `update waqfs 
    set name =?, 
    set problem = ?, 
    set goal = ?, 
    set purpose = ?, 
    set description = ?, 
    set target = ?, 
    set collectedAmount = ?, 
    set expectedAmount = ?, 
    set rating = ?, 
    set image = ?, 
    set isDonationAllowed = ?, 
    set status = ?, 
    set isFeatured = ?, 
    set createdAt = ?, 
    set updatedAt = ?, 
    set endAt = ?, 
    set userId = ?
    ) where waqfId =?`;
    
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
        userId,
        projectId
    ];

    res.json(await transact(sql,esc));
};

module.exports = {
    updateWaqf
}

