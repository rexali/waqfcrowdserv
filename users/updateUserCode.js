const { connectDb } = require("../dbase/connectDb");

/**
 * update data of a given table
 * @param {String} result the query result to be return
 * @param {String} sql sql query string 
 * @param {String[]} esc  parameters to be escaped in query string
 * @returns data object
 */
function updateUserCode(sql, esc) {
    let promise = new Promise((resolve,reject)=>{
      connectDb().query(sql, esc, function (err, result) {
        if (err) {
          reject('Error!');
          throw err;
        }
        if (result.affectedRows >= 1 && result.warningCount === 0) {
          console.log("Record update");
        resolve(true);
        } else {
        resolve(false);
        }
      });
    });
    return promise
  }

module.exports={
    updateUserCode
}