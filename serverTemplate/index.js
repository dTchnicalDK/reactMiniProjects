import express from "express";
import "dotenv/config";
import connnections from "./connections/connnections.js";
import route from "./routes/docs.router.js";

//declaratin of variables
const app = express();
const dbURI = process.env.MONGODB_ATLAS_CONNECTION_URI;
const port = process.env.PORT || 5000;

// routes
app.use("/api", route);

// listening server and connection with database mongodb atlas
connnections(app, port, dbURI);
