const express = require("express");
const router = express.Router();
const data = require("../data/data");

// GET: /api/users
router.get("/", (req, res) => {
  res.json({ users: data.users });
});

// GET: get user by id (path param)  /api/users/{id}
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const user = data.users.find((item) => item.id === parseInt(id));
  if (user) res.json(user);
  else res.status(404).json({ message: `User with ID: ${id} not found` });
});

// POST: add user (body data)   /api/users/{id}
router.post("/", (req, res) => {
  const userData = req.body;
  data.users.push(userData);
  res.json({ message: `User added`, users: data.users });
});

// PUT: update user by id (path param + body data)   /api/users/{id}
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const userData = req.body;
  //find index of user by id into array
  const userInd = data.users.findIndex((item) => item.id === parseInt(id));

  if (userInd !== -1) {
    //change user into array
    data.users[userInd] = userData;
    res.json({ message: `User with ID: ${id} updated`, users: data.users });
  } else {
    res.status(404).json({ message: `User not found` });
  }
});

// DELETE: delete user by id   /api/users/{id}
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const userInd = data.users.findIndex((item) => item.id === parseInt(id));

  if (userInd !== -1) {
    //delete user into array
    data.users.splice(userInd, 1);
    res.json({ message: `User with ID: ${id} deleted`, users: data.users });
  } else {
    res.status(404).json({ message: `User not found` });
  }
});
module.exports = router;
