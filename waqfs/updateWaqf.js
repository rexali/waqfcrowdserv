const { transact } = require("../dbase/transact");
const { deleteFile } = require("../files/deleteFile");
const formidable = require("formidable");
const fs = require("fs");
const { renameFile } = require("../files/renameFile");
const { addWaqfFormFields } = require("./addWaqfFormFields");

/**
 * Update a waqf
 * @param {object} req - user request
 * @param {object} res - response to user request
 */

const updateWaqf = (req, res) => {
    var form = new formidable.IncomingForm();
    form.parse(req, async function (err, fields, files) {
        let filenames = [];
        let fileKeys = Object.keys(files);
        for (let i = 0; i < fileKeys.length; i++) {
            var oldpath = files[fileKeys[i]].path;
            const newfilename = renameFile(files[fileKeys[i]].name);
            filenames.push(newfilename);
            var newpath = './public/uploads/' + newfilename;
            fs.copyFile(oldpath, newpath, function (err) {
                if (err) throw err;
                if (i === fileKeys.length - 1) {
                    console.log("success");
                    // res.json({ result: true, affectedRows: 1 });
                }
            });
        }

        const filename_1 = filenames[0] === 'logo' ? filenames[0] : filenames[1];
        const filename_2 = filenames[1] === 'document' ? filenames[1] : filenames[0];

        await patchWaqf(fields, filename_1, filename_2, res);
    });
}


const patchWaqf = async (fields, filename1, filename2, res) => {

    try {
        const {
            name,
            description,
            address,
            expectedAmount,
            state,
            localGovt,
            purpose,
            country,
            logo,
            endAt,
            organisation,
            document,
            userId,
            waqfId,
        } = fields;

        const esc = [
            name,
            description,
            address,
            expectedAmount,
            state,
            localGovt,
            purpose,
            country,
            filename1 ? filename1 : logo,
            endAt,
            organisation,
            filename2 ? filename2 : document,
            userId,
            waqfId
        ];

        const sql = `update waqfs set 
        name = ?, 
        description =?, 
        address =?, 
        expectedAmount=?, 
        state =?, 
        localGovt=?, 
        purpose=?, 
        country=?, 
        logo=?, 
        endAt=?, 
        organisation=?, 
        document=?, 
        userId=? where waqfId = ?;`;

        var result = await transact(sql, esc);
        if (result.affectedRows === 1) {
            res.json(result);
        }
    } catch (error) {
        console.warn(error);
    }

};

module.exports = {
    updateWaqf
}