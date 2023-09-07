const fs = require("fs");
const formidable = require("formidable");

const addFile = (req, res) => {

  var form = new formidable.IncomingForm();

  form.parse(req, function (err, fields, files) {
    if (err) {
      console.log(err)
    }

    let fileKeys = Object.keys(files);
    var oldpath = files[fileKeys[0]].path;
    var newpath = './public/uploads/' + files[fileKeys[0]].name;

    fs.copyFile(oldpath, newpath, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("success");
        res.json({ result: true });
      }
    });

  });
}

module.exports = {
  addFile
}