const express = require("express");
const app = express();


// import modules
const bodyParser = require("body-parser")
const cors = require("cors");
const morgan = require("morgan");
const ejs = require("ejs")

// import router
const userRoutes = require("./routes/users.router");



// setup view engine
app.set("view engine", "ejs");
app.set("views", `${__dirname}/views`)


// use third-party middlewares
app.use(bodyParser.urlencoded({extended: true}))// form-input (method-post)
app.use(bodyParser.json())//json(fetch api)
app.use(cors()); // fix cross origin error
app.use(express.static("public")) // hosting static file
app.use(morgan("dev")) // log request on server (for debuging)


// setup router
app.get("/", (req, res)=>{
    res.send("<h1>Bien ba bich</h1>")
})

// user router 
app.use("/users", userRoutes)

//export router


 // Listen on port 

 app.listen(5000, ()=>{
    console.log("server is runing on port http://127.0.0.1:5000");
})