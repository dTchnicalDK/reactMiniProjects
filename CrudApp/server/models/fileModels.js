import mongoose from "mongoose";

const fileSchema = new mongoose.Schema(
  {
    filename: String,
    file: String,
  },
  { timestamps: true }
);
export const File = mongoose.model("File", fileSchema);
