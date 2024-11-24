//create instace of router
// create route
//use route

import { Router } from "express";
const route = Router();
import {
  aboutController,
  homeController,
} from "../controllers/docs.controller.js";

route.get("/home", homeController);
route.get("/about", aboutController);

export default route;
