import express from "express";
import User from "../models/user.model.js";
import { createHmac, hash, randomBytes } from "crypto";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({
    email,
  });
  // check for Entry
  if (existingUser) {
    return res.status(400).json({
      error: `User Already exist`,
    });
  }
  // Password SaltHashing
  const salt = randomBytes(256).toString("hex");
  const hashedPassword = createHmac("sha256", salt)
    .update(password)
    .digest("hex");

  // Adding the user

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    salt,
  });

  return res.status(201).json({
    status: "Done",
    id: user._id,
  });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // this also gets all the data like name, salt,  other than "email"
  const existinUser = await User.findOne({
    email,
  });
  if (!existinUser) {
    return res
      .status(404)
      .json({ error: `The user with ${email}  Does not Exist` });
  }

  // Taking from the DB for Check password
  const salt = existinUser.salt;
  const hashed = existinUser.password;

  const newHash = createHmac("sha256", salt).update(password).digest("hex");

  if (hashed !== newHash) {
    return res.status(400).json({ Error: `Invalid Password` });
  }
  // Creating JWT token & Payload
  const payload = {
    _id: existinUser._id,
    name: existinUser.name,
    email: existinUser.email,
  };
  
  // Token Creating
  const token = jwt.sign(payload, process.env.JWT_CODE);

  return res.status(200).json({
    msg: `The user is logged in`,
    toekn: token,
  });
});
export default router;
