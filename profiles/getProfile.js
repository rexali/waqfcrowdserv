const { transact } = require("../dbase/transact");
/** 
 * Get a single user profile
 * @param {object} req - user request
 * @param {object} res - response to user request
 */

const getProfile = async (req, res) => {
    try {
        const sql = `select * from profiles where userId=? `;
        // const sql = 
        // `select profiles.profileId, users.email,profiles.firstName, profiles.photo, profiles.lastName, profiles.phone, 
        // profiles.age, profiles.bio, profiles.dateOfBirth, locations.address, locations.localGovt, 
        // locations.state,locations.country from users join profiles on users.userId=profiles.userId 
        // join locations on profiles.userId=locations.userId where locations.userId=?
        // `;
        const userId = req.params.id;
        const esc = [userId];
        res.json(await transact(sql, esc))
    } catch (error) {
        console.warn(error);
    }

}

module.exports = {
    getProfile
}