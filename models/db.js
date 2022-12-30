const mysql = require("mysql2");
let pool = mysql.createPool({
    host:"localhost",
    database:"users-schemas",
    user:"root",
    password: "12345678",
})

module.exports = pool.promise();