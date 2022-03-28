import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/hello", (req, res) => {
  res.send("Hello World 🙋🏻‍♂️");
});

app.get("/hi/", (req, res) => {
  const name = req.query.name ? req.query.name : "User";
  res.send(`Hi ${name}`);
});

app.get("/bye", (req, res) => {
  res.send("Bye Bye 👋🏼 👋🏼" + " " + req.ip);
});

export default app;
