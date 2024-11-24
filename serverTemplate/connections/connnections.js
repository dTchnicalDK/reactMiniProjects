import { response } from "express";
import mongoose from "mongoose";

async function connnections(app, port, dbURI) {
  try {
    //starting server
    await app.listen(port, () => {
      console.log(`server started on http://localhost:${port}`);
    });
    // connecting mongodb atlas
    mongoose
      .connect(dbURI)
      .then((res) => {
        console.log(`database connected with host: ${res.connections[0].host}`);
      })
      .catch((err) => {
        console.log(`database connection error : ${err}`);
      });
  } catch (error) {
    console.log(`server connection error:- ${error}`);
  }
}

export default connnections;
