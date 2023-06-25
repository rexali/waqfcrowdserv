const fs = require("fs");
const formidable = require("formidable");

const handleSingleFile = (req, res) => {
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    let fileKeys = Object.keys(files);
    var oldpath = files[fileKeys[0]].path;
    var newpath = './public/uploads/' + files[fileKeys[0]].name;
    fs.copyFile(oldpath, newpath, function (err) {
      if (err) throw err;
      console.log("success");
      res.json({ result: true });
    });

  });
}

const handleMultipleFiles = (req, res) => {
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    let fileKeys = Object.keys(files);
    for (let i = 0; i < fileKeys.length; i++) {
      var oldpath = files[fileKeys[i]].path;
      var newpath = './public/uploads/' + files[fileKeys[i]].name;
      fs.copyFile(oldpath, newpath, function (err) {
        if (err) throw err;
        if (i === fileKeys.length - 1) {
          console.log("success");
          res.json({ result: true });
        }
      });
    }
  });
}

module.exports = {
  handleSingleFile,
  handleMultipleFiles
}