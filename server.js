import express from "express";
// import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "./models/User.js";

dotenv.config();

const app = express();
const PORT = 3000;
const uri = process.env.MONGODB_URL;

// ====== middleware =======
app.use(express.json());

// Connect to MongoDB using Mongoose
mongoose
  .connect(uri)
  .then(console.log("Connected successfully to MongoDB!"))
  .catch((e) => console.log(`Error connecting to MongoDB: ${e}`));

// ======= Routes ===========
app.get("/", async (req, res) => {
  res.status(200).json({ message: "Successfully connected to the database!" });
});

// create a new user
app.post("/users", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

// get all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.error(error);
  }
});

// get an user by the id
app.get("/users/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.error(error);
  }
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));