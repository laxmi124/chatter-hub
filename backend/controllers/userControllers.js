const asyncHandler = require("express-async-handler");
const User = require("../models/usersModel");
const generateToken = require("../config/generateToken");

const registerUser = asyncHandler(async (req, res) => {
  console.log("Coming to register url");

  const { name, email, password, pic } = req.body;

  try {
    const userExists = await User.findOne({ email });

    console.log("userExist", userExists);
    console.log({ email });

    if (userExists) {
      res.status(400).json({ error: "User already exists" });
      return;
    }

    const user = await User.create({
      name,
      email,
      password,
      pic,
    });

    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = { registerUser };
