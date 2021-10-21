import express from "express";
import connectDB from "./config/connectDB";
import ContactModel from "./models/contact.model";

let app = express();

//connect to MongoDB
connectDB();


app.get("/test-database", async (req,res)=> {
  try {
    let item ={
      userId: "@!#!@$",
      contactId: "124124124"
    };
    let contact = await ContactModel.createNew(item);
    res.send(contact);
  }catch(err){
    console.log (err);
  }
});

app.listen(process.env.APP_PORT, process.env.APP_HOST, ()=> {
  console.log(`Hello Hoang Tran,I am running at ${process.env.APP_HOST}:${process.env.APP_PORT}/` )
});
