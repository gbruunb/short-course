const mysql = require('mysql2')

const connection = mysql.createPool({
    connectionLimit: 10,
    host: process.env.MYSQL_HOST || "localhost",
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || "password",
    database: process.env.MYSQL_DATABASE || "test",
});

// connection.connect((err) => {
//     if (err) {
//         console.log("Error connecting to database",err)
//         return;
//     }
//     console.log("MySQL successfull connect")
// })

module.exports = { connection }