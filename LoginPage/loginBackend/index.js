import express from "express"
import mongoose from "mongoose"
import registrationLogic from "./logics/registrationLogic.js";
import loginLogics from "./logics/loginLogics.js";
import cors from "cors"

const app = express();
const PORT = 3000;
const mongooseURI = "mongodb://127.0.0.1:27017/logedinUsers"

mongoose.connect(mongooseURI).then(console.log("database connected successfully"))

// For parsing application/x-www-form-urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//middlewares
app.use(cors())

// routes
app.get("/", (req, res)=>{
res.send("welcome to login backend")
})
app.post("/register", registrationLogic)
app.post("/login", loginLogics)







//creating server
app.listen(PORT, (req, res)=>{
console.log("backend started on a port 3000")
})