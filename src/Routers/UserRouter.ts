import  express, {IRouter, NextFunction} from "express";
import userController from "../Controllers/UserController"

const router:IRouter = express.Router()
router.use("/users", userController) 

export default router
