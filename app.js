import express from "express";

const app = express();

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

export default app;
