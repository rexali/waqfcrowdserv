const { connectDb } = require("../dbase/connectDb");
/**
 * Get user password
 * @param {string} sql - a string of sql statement 
 * @param {Array} esc - an array of sql statement input
 * @returns void
 */
function getUserPassword(sql, esc) {

  const promise = new Promise((resolve, reject) => {
    connectDb().query(sql, esc, function (err, result, fields) {
      if (err) throw err;
      if (result[0]?.password) {
        resolve(result[0]?.password);
      } else {
        reject("")
      }
    });
  });

  return promise;    
}


module.exports = {
  getUserPassword
}