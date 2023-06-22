const { transact } = require("../dbase/transact");

const addCause = async (req, res) => {
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

    const sql = `insert into causes(
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
    addCause
}