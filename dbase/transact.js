const { connectDb,pool } = require("./connectDb");

/**
 * Perform transaction - crude 0r read or update or delete
 * @param {String} sql: query string
 * @param {Array} esc:  parameters to be escaped in query string
 * @returns : object array
 */
function transact2(sql, esc) {
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

async function transact(sql, esc) {
    let connection;
    try {
        connection = await pool.getConnection(); // Get a connection from the pool
        const [rows,fields] = await connection.execute(sql,esc);
        return rows;
    } catch (err) {
        console.error('Error executing query:', err);
        throw err;
    } finally {
        if (connection) connection.release(); // Release the connection back to the pool
    }
}
    



module.exports = {
    transact,
    transact2
}
