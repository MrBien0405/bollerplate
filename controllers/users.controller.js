const db = require("../models/db");

module.exports.getAll = (req, res)=>{
    db.execute("SELECT * FROM table_users ")
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>console.log(err))
    res.send("Get all user")
}

module.exports.getById = (req, res)=>{
    res.send("Get user by id")
}

module.exports.createUsers = (req, res)=>{
    res.send("create new user")
}

module.exports.updateUsers =  (req, res)=>{
    res.send("update new user")
}

module.exports.deleteUsers = (req, res)=>{
    res.send("delete user info")
}