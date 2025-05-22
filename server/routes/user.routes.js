const express = require("express");
const router = express.Router();
const {
  getUserById,
  createUser,
  createProfile,
} = require("../controllers/user.controller");

// Route for getting user
router.get("/:id", getUserById);

// Route for creating user
router.post("/", createUser);

// route for user profile creation
router.post("/profile", createProfile);

module.exports = router;
