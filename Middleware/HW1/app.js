const express = require("express");
const app = express();
const port = 3000;

// Middleware 1
const middleware1 = (req, res, next) => {
  console.log("Hello1");
  next();
};

// Middleware 2
const middleware2 = (req, res, next) => {
  console.log("Hello2");
  next();
};

app.use(middleware1);
app.use(middleware2);

// users page /users
app.get("/users", (req, res) => {
  res.send(`
    <html>
      <head><title>Users Page</title></head>
      <body>
        <h1>Welcome to Users Section</h1>
        <p>This is the users page</p>
        <p>Path: ${req.path}</p>
      </body>
    </html>
  `);
});

// main page
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head><title>Main Page</title></head>
      <body>
        <h1>Welcome to the Website</h1>
        <p>This is the main page</p>
        <p>Path: ${req.path}</p>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
