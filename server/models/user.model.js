import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  userWallet: { type: String, required: true },
  userCID: String,
});

export const User = mongoose.model("User", userSchema);
