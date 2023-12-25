const { transact } = require("../dbase/transact");
const { addVolunteerLocation } = require("../locations/addVolunteerLocation");
const { escapeHTML } = require("../utils/escapeHTML");
/** 
 * Add a new volunteer
 * @param {object} req - user request
 * @param {object} res - response to user request
 */
const addVolunteers = async (req, res) => {

    try {
        const {
            firstName, 
            lastName,
            email, 
            phone, 
            education, 
            purpose, 
            age, 
            image, 
            dateOfBirth, 
            occupation, 
            userId
        } = req.body;
    
        const esc = [
            escapeHTML(firstName), 
            escapeHTML(lastName),
            escapeHTML(email), 
            escapeHTML(phone), 
            escapeHTML(education), 
            escapeHTML(purpose), 
            escapeHTML(age), 
            escapeHTML(image), 
            escapeHTML(dateOfBirth), 
            escapeHTML(occupation), 
            escapeHTML(userId)
        ];
    
        const sql = `INSERT INTO volunteers(
            firstName, 
            lastName,
            email, 
            phone, 
            education, 
            purpose, 
            age, 
            image, 
            dateOfBirth, 
            occupation, 
            userId
            )VALUES(
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
    
                
        let volunteerResult = await transact(sql, esc);
        if (volunteerResult.affectedRows === 1 && volunteerResult.insertId) {
            await addVolunteerLocation(req, res, volunteerResult.insertId);
        }
    } catch (error) {
       console.warn(error); 
    }
   
            
}

module.exports = {
    addVolunteers
}