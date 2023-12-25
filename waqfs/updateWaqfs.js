const formidable = require("formidable");
const { uploadFiles } = require("../files/uploadFiles");
const { transact } = require("../dbase/transact");
const { updateWaqfLocation } = require("../locations/updateWaqfLocation");

const updateWaqfs = (req, res) => {

    try {
        var form = new formidable.IncomingForm();

        form.parse(req, async function (err, fields, files) {

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
            } = fields;

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
                    const response = await updateWaqfLocation(fields, res, waqfId)
                    if (response.affectedRows) {
                        try {
                            // upload files and give result
                            console.log(await uploadFiles(files));
                            res.json(await uploadFiles(files));
                        } catch (error) {
                            console.log(error);
                        }
                    }
                } catch (error) {
                    console.log(error);
                }
            }

        });
    } catch (error) {
        console.warn(error);
    }


}

module.exports = {
    updateWaqfs
}
