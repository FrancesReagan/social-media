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

// const uri = process.env.MONGODB_URL;
// const client = new MongoClient(uri);

// // this will be put in separate file later on--all up to the run() function//
// async function run() {
//   try {
//     // Connect the client to the server
//     await client.connect();
//     // Establish and verify connection---select database I am trying to connect to------if you write a name of a database that does not yet exist --
//     // it will automatically create a new database with that name---the command ping is to check database is connected--get a response//
//     await client.db("admin").command({ ping: 1 });
//     console.log("Connected successfully to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// // calling function below//
// run().catch(console.dir);


app.get("/", (req, res) => {
  res.send("Hello, from API!");
})

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))