import express from "express";
const route = express.Router();
import {
  createNote,
  deleteNote,
  editNote,
  getAll,
} from "../controllers/note.controller.js";

route.get("/getAll", getAll);
route.post("/create", createNote);
route.put("/edit/:id", editNote);
route.delete("/delete/:id", deleteNote);

route.get("/home", (req, res) => {
  res.send("welcome homepage");
});

export default route;
