import User, {IUser} from "../Modules/UserModel"
import Missile from "../Modules/MissiliesModel"
import Organization from "../Modules/OrganizationModel"

import express, {IRouter,Request,Response} from "express"
import { buy, login  } from "../Services/StoreServic"

const router : IRouter = express.Router()

router.post("/login", async(req:Request,res:Response) :Promise<void> => {
    try {
        const user = req.body
        const userAuth = await login(user,res)
        res.json(userAuth)
    } catch (error:any) {
        console.error(error.message)
        
    }
} )



router.post("/:id",async(req:Request,res:Response) : Promise<void> => {
    try{
        const bayerById = req.body.id
        const ganById = req.body.gan
        const orgById = req.body.unit
        const barToBy = await buy(bayerById,ganById,bayerById)
        res.json(bayerById)

    } catch (error : any) {
        console.error(error.message)
        
    }

    }
)



export default router