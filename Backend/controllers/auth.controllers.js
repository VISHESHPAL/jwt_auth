import User from "../models/auth.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existUser = await User.findOne({ email });

    if (existUser)
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({
        success: false,
        message: "Invalid  user credentials",
      });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(404).json({
        success: false,
        message: "Invalid  password  credentials",
      });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // for  true in production
      sameSite: "strict",
    });

    return res.status(201).json({
      success: true,
      message: "User logged in successfully ! ",
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const isLogged = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "User logged in",
    user: req.user
  });
};


export const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: false, // true in production
      sameSite: "strict",
    });
    res.status(200).json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({
        success : false ,
        message : " Please Logged to logout "
    })
  }
};
