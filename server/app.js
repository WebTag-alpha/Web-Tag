const express = require("express");
const mongoose = require("mongoose");
const Garanty = require("./schemas/Garanty");
const User = require("./schemas/User");
const cors = require("cors");
const connectDB = require("./db/mongodb");
const app = express();

app.use(cors());

const PORT = 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
