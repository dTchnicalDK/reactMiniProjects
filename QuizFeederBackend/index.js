import express from "express"
import mongoose from "mongoose";
import cors from "cors"
import questionModel from "./models/questionModel.js";
const app = express();

const PORT = 3000;
const URI = "mongodb://127.0.0.1:27017/questionsdb"

// connect database
mongoose.connect(URI).then(()=> console.log("mongodb connected")).catch(err => console.log(err))

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors())

//routes
app.get("/", (req, res)=>{
res.send("welocome to backened")
})
app.post("/newfeed", async (req, res)=>{
    const {que, option1, option2, option3, option4} =req.body
    await questionModel.create({
        question: que,
        option1: option1,
        option2: option2,
        option3: option3,
        option4: option4
    })
    res.send({message: "data created"})
})

//starting server
app.listen(PORT, ()=>{
console.log(`backened started on localhost:${PORT}`);
})
