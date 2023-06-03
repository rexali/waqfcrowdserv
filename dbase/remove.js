const {connectDb} = require("./connectDb");

/**
 * remove data from a given table in the query
 * @param {String} data the query result to be return
 * @param {String} sql sql query string
 * @param {String[]} esc  parameters to be escaped in query string
 * @returns data object
 */
function remove(sql, esc, res) {
    connectDb().query(sql, esc, function (err, result) {
      if (err) throw err;
        console.log("Record removed --");
        res.json(result);
    });
  }

  module.exports={
    remove
  }