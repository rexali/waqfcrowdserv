var mysql = require("mysql2");
const jsonwebtoken = require("jsonwebtoken")
const dotenv = require('dotenv');
dotenv.config();
/**
 * create connection to the database
 * @param conn is mysql connection using:
 * @param host hostname
 * @param user username
 * @param password password
 * @param database database name
 * @returns conn object
 */
function connectDb() {
    try {
        const conn = mysql.createConnection({
            host: process.env.DB_HOST, //"3306",
            user: process.env.DB_USER, //"root",
            password: process.env.DB_PASS, //"rexali",
            database: process.env.DB_NAME, // "waqfcrowd",
            port: process.env.DB_PORT
        });

        conn.connect(function (err) {
            if (err) throw err;
            console.log("Connected!");
        });

        return conn;
    } catch (error) {
        console.warn(error);
    }

}

const mysql2 = require('mysql2/promise'); // Using the promise-based version for async/await

const pool = mysql2.createPool({
    host: process.env.DB_HOST, //"3306",
    user: process.env.DB_USER, //"root",
    password: process.env.DB_PASS, //"rexali",
    database: process.env.DB_NAME, // "waqfcrowd",
    port: process.env.DB_PORT,
    waitForConnections: true, // Whether to wait for a connection to become available
    connectionLimit: 10,     // Maximum number of connections in the pool
    queueLimit: 0            // Maximum number of requests the pool will queue (0 means unlimited)
});

module.exports = {
    connectDb,
    pool
}
