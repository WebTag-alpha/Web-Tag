const User = require("../models/user.model");

// Get user with his wallet
const getUserById = async (req, res) => {
  try {
    const userWallet = req.params.id;
    const user = await User.findBy({ userWallet: userWallet });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Enternal server error", error: error.message });
  }
};

// Create user with his wallet

const createUser = async (req, res) => {
  try {
    const { userWallet } = req.body;

    // Check if the wallet provided
    if (!userWallet) {
      return res.status(400).json({ message: "User wallet was not found" });
    }

    // Check if user already exist
    const existingUser = await User.findOne({ userWallet });
    if (existingUser) {
      return;
    }

    const newUser = new User({ userWallet });
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Enternal server error", error: error.message });
  }
};

// Create profile

const createProfile = async (req, res) => {
  try {
    const { userWallet, CID } = req.body;

    // Find user by wallet
    const user = await User.findOne({ userWallet });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Save CID
    user.CID = CID;
    await user.save();

    res.status(200).json({ message: "CID updated", user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Enternal server error", error: error.message });
  }
};

module.exports = { getUserById, createUser, createProfile };
