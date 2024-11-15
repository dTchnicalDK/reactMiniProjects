import mongoose, { Schema } from "mongoose";

const Uschema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    password:String,
    matchPassword: String
})

//;creating model for user
 const Usermodel = mongoose.model("user", Uschema)


 //exporting model
 export default Usermodel;