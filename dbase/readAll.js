const {connectDb} = require("./connectDb");

/**
 * read data from a given table
 * @param {String} data  the query result to be return 
 * @param {String} sql  sql query string
 * @returns data object
 */
function readAll(sql, res) {
    connectDb().query(sql, function (err, result, fields) {
      if (err) throw err;
      console.log("All record read");
      res.json(result)
    });
  }

  module.exports={
    readAll
  }
  