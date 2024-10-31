var sqlite = require('sqlite3');

const db = new sqlite.Database('cwaqf.db');
// define schema
db.exec(`CREATE TABLE IF NOT EXISTS tests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
    );`, function (result, err) {
    if (err) {
        throw new Error("Error! " + err)
    }
    console.log(result);
});

db.run(`
CREATE TABLE IF NOT EXISTS users (
    userId INTEGER PRIMARY KEY AUTOINCREMENT, 
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    role TEXT,
    status INTEGER,
    createdAt TIMESTAMP DEFAULT (DATETIME('NOW','LOCALTIME'))
    );`, function (result, err) {
    if (err) {
        throw new Error("Error! " + err)
    }
    console.log(result);
});

class Tests {
    constructor(data) {
        this.data = data;
    }

    save = async () => {
        const promise = new Promise((resolve, reject) => {
            db.all(`
            INSERT INTO users (email,password,role,status) 
            VALUES ('aliyub@gmail.com', 'admin', '12345678', 1);`, (err, rows) => {
                if (err) {
                    throw new Error('Error!')
                }
                resolve(rows);
            })
        })

        return promise;
    }

    getAll = () => {
        let promise = new Promise((resolve, reject) => {
            db.all('SELECT * FROM tests', (err, rows) => {
                if (err) {
                    throw new Error('Error!')
                }
                resolve(rows)

            })
        })
        return promise
    }

}

module.exports = { Tests }