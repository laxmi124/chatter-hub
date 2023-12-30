const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const app = express();
const PORT = process.env.PORT || 5000;

// Add this line to parse JSON-encoded bodies
app.use(express.json());

dotenv.config();
connectDB();

app.get("/user", (req, res) => {
  console.log("coming to default url");
  res.send("server is running fine");
});

app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log(`port is running on ${PORT} `.yellow.bold);
});
