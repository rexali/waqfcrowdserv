const { transact } = require("../dbase/transact");
const { update } = require("../dbase/update");
/**
 * Update a project
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const updateProject = async (req, res) => {
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

    const sql = `update projects 
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
    ) where projectId =?`
    
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
    updateProject
}

