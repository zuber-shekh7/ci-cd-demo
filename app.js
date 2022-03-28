import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/hello", (req, res) => {
  res.send("Hello World 🙋🏻‍♂️");
});

export default app;
