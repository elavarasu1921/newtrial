const mySQL = require('mysql2');
require('dotenv').config();

const db = mySQL.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DATABASE,
    password: process.env.DB_PASSWORD,
});

module.exports = db.promise();
