const fs = require("fs");
const formidable = require("formidable");
const { renameFile } = require("./renameFile");
const { warn } = require("console");

const handleSingleFile = (req, res) => {
  try {
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
  } catch (error) {
    console.warn(error);
  }
 
}


const handleMultipleFiles = (req, res) => {
  try {
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
  } catch (error) {
    console.warn(error);
  }
  
}


const handleFiles = (req, res) => {
  try {
    const filePromise = new Promise((resolve, reject) => {
      var form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {
        let fileKeys = Object.keys(files);
        for (let i = 0; i < fileKeys.length; i++) {
          var oldpath = files[fileKeys[i]].path;
          var newFilename = renameFile(files[fileKeys[i]].name);
          var newpath = './public/uploads/' + newFilename;
          fs.copyFile(oldpath, newpath, function (err) {
            if (err) reject({ error: err });
            if (i === fileKeys.length - 1) {
              console.log("success");
              resolve({ result: true, newFilename });
            }
          });
        }
      });
    });
  } catch (error) {
    console.warn(error);
  }


  return filePromise;
}

module.exports = {
  handleSingleFile,
  handleMultipleFiles,
  handleFiles
}