import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json("Passwords do not match");
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    //Hash Password Here
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    //Profile Pic Here
    //https://avatar-placeholder.iran.liara.run/
    //https://avatar.iran.liara.run/public/boy?username=Scott
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    const newUser = new User({
      fullName,
      username,
      password: hashPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });
    if (newUser) {
      //Generate JWT token here
      generateTokenAndSetCookie(newUser._id, res);
      //Save user here
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
    //end try
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).send({ error: "Internal Server Error" });
  }
};
export const login = (req, res) => {
  res.send("Login User");
};

export const logout = (req, res) => {
  res.send("Logout User");
};