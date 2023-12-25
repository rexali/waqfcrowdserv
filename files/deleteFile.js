var fs = require("fs");

function deleteFile(filename, res) {
    try {
        var filepath = './public/uploads/' + filename;
        fs.unlink(filepath, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log({ result: "success" });
            }
        }); 
    } catch (error) {
        console.warn(error);
    }
  
}

module.exports = {
    deleteFile
};