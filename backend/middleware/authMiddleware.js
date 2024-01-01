const jwt = require("jsonwebtoken");
const User = require("../models/usersModel");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      console.log("authrozation header", req.headers.authorization);
      token = req.headers.authorization.split(" ")[1];

      console.log("token", token);
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("decoded", decoded);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not Authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, not token");
  }
});

module.exports = { protect };
