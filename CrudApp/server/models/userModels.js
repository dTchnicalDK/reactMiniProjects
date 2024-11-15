import mongoose from "mongoose";

//creating schema
const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
  },
  password: {
    type: String,
    // required: true,
  },
  avtar: {
    type: String,
  },
  coverImage: {
    type: String,
  },
});

export const User = mongoose.model("User", userSchema);
