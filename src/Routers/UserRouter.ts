import  express, {IRouter, NextFunction} from "express";
import userController from "../Controllers/UserController"
import MissiiesController from "../Controllers/MissileController"
import OrganizationController from "../Controllers/OrganizationController"
import Store from "../Controllers/StoreController"

const router:IRouter = express.Router()
router.use("/users", userController) 
router.use("/missiles", MissiiesController) 
router.use("/organization", OrganizationController) 
router.use("/store", Store) 

export default router
