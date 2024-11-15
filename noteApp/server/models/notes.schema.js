import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, unique: true },
  content: String,
});

export const Note = mongoose.model("Note", notesSchema);
