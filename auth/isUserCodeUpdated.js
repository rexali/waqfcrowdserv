const { connectDb } = require("../dbase/connectDb");

/**
 * Update the user random code
 * @param {String} sql sql query string 
 * @param {String[]} esc  parameters to be escaped in query string
 * @returns boolean promise
 */
function isUserCodeUpdated(sql, esc) {
  let promise = new Promise((resolve, reject) => {
    connectDb().query(sql, esc, function (err, result) {
      if (err) {
        reject('Error!');
        throw err;
      }
      if (result.affectedRows >= 1 && result.warningCount === 0) {
        console.log("Record updated");
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
  return promise;
}

module.exports = {
  isUserCodeUpdated
}