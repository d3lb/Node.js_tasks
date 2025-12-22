const express = require("express");
const logger = require("./logger");
const authMiddleware = require("./authMiddleware");

const app = express();
const port = 3000;

app.use(logger);

// Public route
app.get("/public", (req, res) => {
  res.send("This is a public page.");
});

// Admin route
app.get("/admin", authMiddleware, (req, res) => {
  res.send("Welcome to the Admin Page!");
});

// Main route
app.get("/", (req, res) => {
  res.send("Welcome to the home page.");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
