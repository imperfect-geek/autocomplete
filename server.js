const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
require("./app/connection");
const route = require("./app/routes/route");

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());

app.get("/hello", (req, res) => {
  res.send("Hello User!");
});

app.use(route);

app.get("*", (req, res) => {
  res.send("Page not found");
});

app.listen(PORT, () => console.log(`App Running at Port ${PORT}`));
