const { connectDb } = require("../dbase/connectDb");

/**
 * 
 * @param {*} sql 
 * @param {*} esc 
 * @param {*} func 
 * @param {*} pass 
 * @param {*} res 
 * @param {*} userId 
 * @param {*} tableName 
 */
function getUserPassword(sql, esc, func, pass, res, userId, tableName) {
    connectDb().query(sql, esc, function (err, result, fields) {
      if (err) throw err;
      console.log("Record read");
      func(result[0].password, pass, esc, res,userId, tableName);
    });
  }

  
  module.exports={
    getUserPassword
  }