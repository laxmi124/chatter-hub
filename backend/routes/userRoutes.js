const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();


// Handle GET requests to /api/user

// router.route("/").get((req, res) => {
//   res.send("GET request to /api/user");
// });

// Handle POST requests to /api/user
router.route("/").post(registerUser).get(protect, allUsers);
router.route("/login").post(authUser);

module.exports = router;
