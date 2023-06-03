const { connectDb } = require("../dbase/connectDb");

/**
 * 
 * @param {*} sql 
 * @param {*} esc 
 * @returns 
 */
function checkUserEmail(sql, esc) {
  let promise = new Promise((resolve, reject) => {
    connectDb().query(sql, esc, function (err, result, fields) {
      if (err) {
        console.log("Record read");
        reject('Error!')
        throw err;
      }
      console.log("Record read");
      if (result.length === 1) {
        console.log(result)
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
  return promise;
}

module.exports = {
  checkUserEmail
}