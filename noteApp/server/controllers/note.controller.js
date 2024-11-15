// import Note from "../models/notes.schema.js";
import { Note } from "../models/notes.schema.js";

//---------- to create note--------
export const createNote = async (req, res) => {
  try {
    const newNote = new Note(req.body);
    if (!newNote.content || newNote.content === " ") {
      return res.status(404).json({ msg: "fill data first" });
    }
    const savedNote = await newNote.save();

    res
      .status(200)
      .json({
        msg: `your note --: ${savedNote.title} :-- created successfully`,
      });
  } catch (error) {
    res.status(500).json(`create new note error:-- ${error}`);
  }
};
//---------- to edit existing note--------
export const editNote = async (req, res) => {
  try {
    const doesExits = await Note.findByIdAndUpdate(req.params.id, req.body);
    if (!doesExits) {
      return res.status(404).json({ msg: "not found" });
    }

    res.status(200).json(doesExits);
  } catch (error) {
    res.status(500).json(`edit new note error:-- ${error}`);
  }
};
//---------- to delete existing note--------
export const deleteNote = async (req, res) => {
  try {
    const doesExits = await Note.findByIdAndDelete(req.params.id);
    if (!doesExits) {
      return res.status(404).json({ msg: "wrong id" });
    }

    res.status(200).json({
      msg: `${doesExits.title}:-- deleted successfully`,
    });
  } catch (error) {
    res.status(500).json(`delete note error:-- ${error}`);
  }
};

// ----------------------get all-------------------------
export const getAll = async (req, res) => {
  try {
    const notes = await Note.find();
    if (!notes) {
      res.status(404).json({ msg: "no data found" });
    }
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json(`getAll user Erro:-- ${error}`);
  }
};
