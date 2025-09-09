import User from "../models/auth.model.js";
import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(200).json({
        success: false,
        message: "User not logged in"
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id).select("-password");

    if (!req.user) {
      return res.status(200).json({
        success: false,
        message: "User not logged in"
      });
    }

    next();
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      success: false,
      message: "User not logged in"
    });
  }
};

export default authMiddleware;
