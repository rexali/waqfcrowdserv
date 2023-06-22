const { connectDb } = require("../dbase/connectDb");

/**
 * Check user email during forget operation
 * @param {string} sql - a string of sql statement
 * @param {object} esc - array of sql string input
 * @returns boolean if user email exists
 */
function isUserEmail(sql, esc) {
  let promise = new Promise((resolve, reject) => {
    connectDb().query(sql, esc, function (err, result, fields) {
      if (err) throw err;
      if (result.length === 1) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
  return promise;
}

module.exports = {
  isUserEmail
}