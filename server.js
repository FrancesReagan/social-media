import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

const uri = process.env.MONGODB_URL;
const client = new MongoClient(uri);

// this will be moved to another file shortly from the async to the run function//
async function run() {
  try {
  
    await client.connect();
    
    await client.db("social-media").command({ ping: 1 });
    console.log("Connected successfully to MongoDB!");
  } finally {
    
    await client.close();
  }
}

run().catch(console.dir);


app.get("/", (req, res) => {
  res.send("Hello, from API!");
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));