import mongoose, { Schema } from "mongoose";

const questionSchema = new Schema({
    question: String,
    option1: String,
    option2: String,
    option3: String,
    option4: String
})
const questionModel = mongoose.model("question", questionSchema)
export default questionModel;