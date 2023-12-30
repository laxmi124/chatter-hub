const express = require("express");
const { registerUser } = require("../controllers/userControllers");
const router = express.Router();

// Handle GET requests to /api/user

router.route("/").get((req, res) => {
  res.send("GET request to /api/user");
});

// Handle POST requests to /api/user
router.route("/").post(registerUser);

module.exports = router;
