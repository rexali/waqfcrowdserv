const { connectDb } = require("./connectDb");

/**
 * Perform transaction - crude 0r read or update or delete
 * @param {String} sql: query string
 * @param {Array} esc:  parameters to be escaped in query string
 * @returns : object array
 */
function transact(sql, esc) {
    try {
        const readPromise = new Promise((resolve, reject) => {
            const conn = connectDb();
            conn.promise().query(sql, esc, function (err, result, fields) {
                if (err) {
                    reject(err);
                }
                resolve(result);
            }).then(()=>{
                conn.end();
                console.log("Connected!");
            });
        });

        return readPromise;
    } catch (error) {
        console.log(error);
    }

}

module.exports = {
    transact
}