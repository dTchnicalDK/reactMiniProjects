import express from "express";
import "dotenv/config";
import connnections from "./connnections.js";

const dbURI = process.env.MONGODB_ATLAS_CONNECTION_URI;

const app = express();
const port = process.env.PORT || 5000;
// console.log(process.env);

// routes
app.get("/", (req, res) => {
  res.send("welcome homepage");
});
app.get("/about", (req, res) => {
  res.send("welcome aboutpage");
});

// listening server
connnections(app, port, dbURI);
