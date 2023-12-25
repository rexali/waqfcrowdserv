const { transact } = require("../dbase/transact");

const updateProfile = async (req, res) => {

    try {
        const {
            photo,
            firstName,
            lastName,
            phone,
            age,
            bio,
            dateOfBirth,
            address,
            localGovt,
            state,
            country,
            userId
        } = req.body;
    
        const profileSQL = `update profiles set 
        photo = ?, 
        firstName = ?, 
        lastName = ?, 
        phone = ?, 
        age = ?, 
        bio = ?, 
        dateOfBirth = ? where userId =?`; 
    
        const locationSQL = `update locations set 
        address = ?, 
        localGovt = ?, 
        state = ?, 
        country = ? where userId =?`;
    
        const profileEsc = [
            photo,
            firstName,
            lastName,
            phone,
            age,
            bio,
            dateOfBirth,
            userId
        ];
    
        const locationEsc = [
            address,
            localGovt,
            state,
            country,
            userId
        ];
    
        const result = await transact(profileSQL, profileEsc);
        if (result.affectedRows === 1) {
            res.json(await transact(locationSQL, locationEsc));
        }
    } catch (error) {
        console.warn(error);
    }
    
};

module.exports = {
    updateProfile
}