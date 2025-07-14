import express from "express";
// import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;
const uri = process.env.MONGODB_URL;

// connect to MongoDb using Mongoose//
mongoose.connect(uri)
.then(() => console.log("Connected successfully to MongoDb"))
.catch(e => console.log(`Error connecting to MongoDb: ${e}`));

app.get("/", (req, res) => {
  res.send("Hello, from API!");
})

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))