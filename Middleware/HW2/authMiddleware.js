module.exports = (req, res, next) => {
  const { user } = req.query;

  if (user !== "admin") {
    return res.status(403).send("Access Denied.");
  }

  console.log("User authorized");
  next();
};
