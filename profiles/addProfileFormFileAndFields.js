const formidable = require("formidable");
const fs = require("fs");
const { addProfileFormFields } = require("./addProfileFormFields");
const { renameFile } = require("../files/renameFile");

const addProfileFormFileAndFields = (req, res) => {
  try {

    var form = new formidable.IncomingForm();

    form.parse(req, async function (err, fields, files) {
      if (err) {
        console.log(err)
      }

      let fileKeys = Object.keys(files);
      var oldpath = files[fileKeys[0]].path;
      let filename = renameFile(files[fileKeys[0]].name);
      var newpath = './public/uploads/' + filename;

      fs.copyFile(oldpath, newpath, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("success");
        }
      });
      //    add form fields to database
      await addProfileFormFields(fields, filename, res);
    });
  } catch (error) {
    console.warn(error);
  }

}

module.exports = {
  addProfileFormFileAndFields
}