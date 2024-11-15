import express from "express";
const app = express();
import bodyParser from "body-parser";
import cors from "cors";

// imported objects and components
import route from "./routes/note.routes.js";
import connections from "./connections/connections.js";

// routes;
app.use(bodyParser.json());
app.use(cors());
app.use("/api", route);

//starting server and connecting database
connections(app);
