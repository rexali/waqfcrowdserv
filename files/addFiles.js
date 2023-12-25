const fs = require("fs");
const formidable = require("formidable"); 

const addFiles = (req, res) => {
  try {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      console.log(fields);
      console.log(files);
      let fileKeys = Object.keys(files);
      for (let i = 0; i < fileKeys.length; i++) {
        var oldpath = files[fileKeys[i]].path;
        var newpath = './public/uploads/' + files[fileKeys[i]].name;
        fs.copyFile(oldpath, newpath, function (err) {
          if (err) throw err;
          if (i === fileKeys.length - 1) {
            console.log("success");
            res.json({ result: true, affectedRows:1 });
          }
        });
      }
    });
  } catch (error) {
    console.warn(error);
  }
   
  }

  module.exports={
    addFiles
  }
  