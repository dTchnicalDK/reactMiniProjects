import dotenv from "dotenv";
dotenv.config(); // notedown
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import route from "./routes/note.routes.js";

import connections from "./connections/connections.js";
const app = express();

//writing middlewares
app.use(bodyParser.json());
app.use(cors);

//call to connect to server
connections(app);

// middleware to use routes

// app.use("/api", route);
app.get("/home", (req, res) => {
  res.send("hi from homepage");
});
