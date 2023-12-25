const formidable = require("formidable");
const fs = require("fs");
const { renameFile } = require("../files/renameFile");
const { addWaqfFormFields } = require("./addWaqfFormFields");

const addWaqfFormFilesAndFields = (req, res) => {

  try {
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
      await addWaqfFormFields(fields, filenames[0], filenames[1], res);
    });
  } catch (error) {
    console.warn(error);
  }

}

module.exports = {
  addWaqfFormFilesAndFields
}