const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
// Add this line to parse JSON-encoded bodies
app.use(express.json());

dotenv.config();
connectDB();

app.get("/user", (req, res) => {
  res.send("server is running fine");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes)

app.listen(PORT, () => {
  console.log(`port is running on ${PORT} `.yellow.bold);
});
