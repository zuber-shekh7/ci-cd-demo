import app from "./app.js";

const PORT = process.env.PORT || 4000;

app.listen(4000, () => {
  console.log(`App is running on http://localhost:4000`);
});
