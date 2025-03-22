import express from "express"
import { userLogin, adminLogin, userRegister } from "../controller/userController.js"

const userRouter = express.Router();

userRouter.post('/register',userRegister);
userRouter.post('/login',userLogin);
userRouter.post('/admin',adminLogin);

export default userRouter