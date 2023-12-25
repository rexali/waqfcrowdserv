/**
 * Add new profile
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const { transact } = require("../dbase/transact");

const addProfile = async (req, res) => {
    try {
        const {
            photo, 
            firstName, 
            lastName, 
            phone, 
            age, 
            bio, 
            dateOfBirth, 
            streetAddress, 
            localGovt, 
            state, 
            country, 
            createdAt, 
            updatedAt, 
            userId
        } = req.body;
        const sql = `insert into profiles(
            photo, 
            firstName, 
            lastName, 
            phone, 
            age, 
            bio, 
            dateOfBirth, 
            streetAddress, 
            localGovt, 
            state, 
            country, 
            createdAt, 
            updatedAt, 
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
            ?
            )`;
        const esc = [
            photo, 
            firstName, 
            lastName, 
            phone, 
            age, 
            bio, 
            dateOfBirth, 
            streetAddress, 
            localGovt, 
            state, 
            country, 
            createdAt, 
            updatedAt, 
            userId
        ];
        res.json(await transact(sql, esc));
    } catch (error) {
        console.warn(error);
    }
    
};

module.exports = {
    addProfile
}