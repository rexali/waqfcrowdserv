const fs = require("fs");
const formidable = require("formidable");
const path = require('path');


const handleSingleFile = (req, res) => {
    var form = new formidable.IncomingForm();
    console.log("success 1");

    form.parse(req, function (err, fields, files) {
      console.log("success 2");

      let fileKeys = Object.keys(files);
      var oldpath = files[fileKeys[0]].path;
      var newpath = './public/uploads/' + files[fileKeys[0]].name;
      fs.readFile(oldpath, newpath, function (err) {
        if (err) throw err;
        console.log("success");
        res.json({ result: true });
      });
  
    });
  
  }

  const handleDoubleFiles = (req, res) => {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath1 = files.vendorpicture.path;
      var oldpath2 = files.vendordocument.path;
      var newpath1 = './public/uploads/' + files.vendorpicture.name;
      var newpath2 = './public/uploads/' + files.vendordocument.name;
      fs.copyFile(oldpath1, newpath1, function (err) {
        if (err) throw err;
        console.log("success");
        // res.json({ result: true });
      });
      fs.copyFile(oldpath2, newpath2, function (err) {
        if (err) throw err;
        console.log("success");
        // res.json({ result: true });
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
          console.log("success");
          // res.json({ result: true });
        });
      }
    });
  
  }

  module.exports={
    handleSingleFile,
    handleDoubleFiles,
    handleMultipleFiles
  }