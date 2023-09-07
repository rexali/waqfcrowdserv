const { connectDb } = require("../dbase/connectDb");
const jsonwebtoken = require("jsonwebtoken"); 
/**
 * Get the user authentication token
 * @param {String} sql - a string of sql
 * @param {Array} esc - an array of arguments
 * @param {Object} res - request object
 */
function getUserToken(sql, esc) {
  const tokenPromise = new Promise((resolve, reject)=>{
    connectDb().query(sql, esc, function (err, result, fields) {
      if (err) reject(err);
      console.log("Auth record read");
      const [{userId,email}] = result;
      const jwtSecret = process.env.SECRET_KEY;
      const token = jsonwebtoken.sign(
        { result },
        jwtSecret,
        { noTimestamp: true, expiresIn: '24h' }
      );
      resolve({token,userId,email})
    });
  });
  return tokenPromise;
}

module.exports = {
  getUserToken 
}