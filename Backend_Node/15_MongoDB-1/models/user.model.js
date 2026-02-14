import { model, Schema, trusted } from "mongoose";

// Structure of the Table
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    salt: {
      type: String,
      require: true,
    },
  },
  { timestamps: true },
);

export const User = model("user", userSchema); // the "user" is the model name for mongoDB...
export default User;
