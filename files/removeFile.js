var fs = require("fs");

function removeFile(req, res) {
    const { filename } = req.body;
    var filepath = './public/uploads/' + filename;
    fs.unlink(filepath, function (err) {
        if (err) {
            console.log(err);
        } else {
            res.json({ result: "success" });
        }
    });
}

module.exports = {
    removeFile
};