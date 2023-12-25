const { connectDb } = require("../dbase/connectDb");
const { Mutex } = require("async-mutex");

// create mutex instance
const mutex = new Mutex();

/**
 * Check user email during forget operation
 * @param {string} sql - a string of sql statement
 * @param {object} esc - array of sql string input
 * @returns boolean if user email exists
 */
async function isUserEmail(sql, esc) {
  // acquire path
  const release = await mutex.acquire();
  try {
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
  } catch (error) {
    console.warn(error);
  } finally {
    // release path for other
    release()
  }

}

module.exports = {
  isUserEmail
}