const { connectDb } = require("../dbase/connectDb");
const {Mutex} = require('async-mutex');


// mutex instance
const mutex = new Mutex();

/**
 * Update the user random code
 * @param {String} sql sql query string 
 * @param {String[]} esc  parameters to be escaped in query string
 * @returns boolean promise
 */
async function isUserCodeUpdated(sql, esc) {
  // acquire access to path to perform operation to avoid race condition
  const release = await mutex.acquire();
  try {
    let promise = new Promise((resolve, reject) => {
      connectDb().query(sql, esc, function (err, result) {
        if (err) {
  
          reject('Error!');
        }
        if (result.affectedRows >= 1 && result.warningCount === 0) {
  
          resolve(true);
        } else {
  
          resolve(false);
        }
      });
    });
    
    return promise;
  } catch (error) {
    console.warn(error);
  }finally{
    // release path for other operation
    release();
  }
 
}

module.exports = {
  isUserCodeUpdated
}