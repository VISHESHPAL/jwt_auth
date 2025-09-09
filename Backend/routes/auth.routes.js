import express from 'express';
import { isLogged, login, logout, signup } from '../controllers/auth.controllers.js';
import authMiddleware from '../middleware/auth.middleware.js';

const userRouter = express.Router();


userRouter.post("/signup", signup)
userRouter.post("/login", login)
userRouter.get("/islogged", authMiddleware, isLogged)
userRouter.get("/logout", authMiddleware, logout)


export default userRouter