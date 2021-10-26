import express from "express";
import connectDB from "./config/connectDB";
import configViewEngine from "./config/viewEngine";
import initRoutes from "./routes/web";


//Init app
let app = express();

//connect to MongoDB
connectDB();

//config ViewEngine

configViewEngine(app);

//init routes
initRoutes(app);

app.listen(process.env.APP_PORT, process.env.APP_HOST, ()=> {
  console.log(`Hello Hoang Tran,I am running at ${process.env.APP_HOST}:${process.env.APP_PORT}/` )
});
