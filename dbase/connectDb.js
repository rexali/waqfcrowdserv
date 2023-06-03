var mysql = require("mysql2");
const jsonwebtoken = require("jsonwebtoken")
const dotenv = require('dotenv');
dotenv.config();
/**
 * create connection to the database
 * @param con is mysql connection using:
 * @param host hostname
 * @param user username
 * @param password password
 * @param database database name
 * @returns conn object
 */
function connectDb() {
    
    const conn = mysql.createConnection({
        host: process.env.host, //"127.0.0.1",
        port:process.env.port, //"3306",
        user: process.env.user, //"root",
        password: process.env.password, //"rexali",
        database: process.env.database, // "waqfcrowd",
    });

    conn.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
    });

    return conn;
}

module.exports = {
    connectDb
}