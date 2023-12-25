const fs = require("fs");

function uploadFiles(files) {
    try {
        const uploadPromise = new Promise((resolve, reject) => {
            let fileKeys = Object.keys(files);
            for (let i = 0; i < fileKeys.length; i++) {
                var oldpath = files[fileKeys[i]].path;
                var newpath = './public/uploads/' + files[fileKeys[i]].name;
                fs.copyFile(oldpath, newpath, function (err) {
                    if (err) throw err;
                    if (i === fileKeys.length - 1) {
                        resolve({ result: true, affectedRows: 1 });
                    }
                });
            }
        });
    
        return uploadPromise;
    } catch (error) {
        console.warn(error);
    }
   
}

module.exports = {
    uploadFiles
}