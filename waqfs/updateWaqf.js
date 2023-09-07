const { transact } = require("../dbase/transact");
const { addFiles } = require("../files/addFiles");
const { updateWaqfLocation } = require("../locations/updateWaqfLocation");


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
        waqfId
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
        startAt,
        waqfId
    ];


    const sql = `update waqfs set 
    name = ?, 
    problem =?, 
    goal =?, 
    purpose=?, 
    description=?, 
    target=?, 
    collectedAmount=?, 
    expectedAmount=?, 
    planPDF=?, 
    image=?, 
    status=?, 
    endAt=?, 
    userId=?, 
    type=?, 
    beneficiary=?, 
    partner=?, 
    deedPDF=?, 
    video=?, 
    startAt=?, isDonationAllowed = 'yes', isFeatured = 'no' where waqfId = ?;`;
    var result;
    try {
        result = await transact(sql, esc);
    } catch (error) {
        console.log(error);
    }
    if (result.affectedRows) {
        try {
            const response = await updateWaqfLocation(req, res, waqfId)
            if (response.affectedRows) {
                try {
                    addFiles(req, res);
                } catch (error) {
                    console.log(error);
                }
            }
        } catch (error) {
            console.log(error);
        }

    }
};

module.exports = {
    updateWaqf
}

