const { transact } = require("../dbase/transact");
/**
 * Get all users profile
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const getProfiles = async (req, res)=>{
    try {
        const sql = `select * from users join profiles on users.userId=profiles.userId 
    join locations on profiles.userId=locations.userId`;
    const esc = [];
    res.json(await transact(sql,esc)); 
    } catch (error) {
        console.warn(error);
    }
     
}

module.exports = {
    getProfiles
}