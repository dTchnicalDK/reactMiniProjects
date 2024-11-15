// require("dotenv").config();
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;
const mongoDb_uri = process.env.MONGODB_ATLAS_URI;
const dbName = process.env.DB_NAME;

function connections(App) {
  try {
    //connecting to database
    mongoose
      // .connect(`${mongoDb_uri}/${dbName}`)
      .connect(`${mongoDb_uri}/${dbName}`)
      .then((response) => console.log("database connected !!" + response));

    //starting server
    App.listen(port, () => {
      console.log(`server started on  http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

export default connections;
