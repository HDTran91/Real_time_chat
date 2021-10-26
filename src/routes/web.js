import express from "express";
import {home, auth} from "./../controllers/index";

let route = express.Router();

/**
 * Init all routes
 * @param app from exactly express module
 */

let initRoutes = (app) =>{
  route.get("/", home.getHome);
  route.get("/login-register", auth.getLoginRegister );
  return app.use("/", route)
};

module.exports = initRoutes;