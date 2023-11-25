import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "data:image/png;base64,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",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
