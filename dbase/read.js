const {connectDb} = require("./connectDb");

/**
 * read data from a given table
 * @param {String} data  the query result to be return 
 * @param {String} sql  sql query string
 * @param {String[]} esc  parameters to be escaped in query string
 * @returns data object
 */
function read(sql, esc, res) {
    connectDb().query(sql, esc, function (err, result, fields) {
      if (err) throw err;
      console.log("Record read");
      res.json(result);
    });
  }

  module.exports={
    read
  }
  