const express = require("express");
const mongoose = require("mongoose");
const express = require("express");
const User = require("./models/user.model");
const userRoutes = require("./routes/user.routes");

const cors = require("cors");
const connectDB = require("./db/mongodb");
const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
