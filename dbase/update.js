const {connectDb} = require("./connectDb");

/**
 * update data of a given table
 * @param {String} data the query result to be return
 * @param {String} sql sql query string 
 * @param {String[]} esc  parameters to be escaped in query string
 * @returns data object
 */
function update(sql, esc, res) {
    connectDb().query(sql, esc, function (err, result) {
      if (err) throw err;
      console.log("Record update");
      res.set('Content-Type', 'application/json');
      res.json(result);
    });
  }
  
  module.exports={
    update
  }