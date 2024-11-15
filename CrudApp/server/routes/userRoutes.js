import express from "express";
import multer from "multer";
import { upload } from "../middleware/multer.js";
import {
  createUser,
  deleteUser,
  editUser,
  findOne,
  getAll,
} from "../controllers/userControllers.js";
const route = express.Router();

//different routes for users
route.post(
  "/create",
  upload.fields([
    {
      name: "avtar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  createUser
);
route.get("/getAll", getAll);
route.get("/findOne/:id", findOne);
route.put("/edit/:id", editUser);
route.delete("/delete/:id", deleteUser);

export default route;
