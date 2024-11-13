import {CookieOptions,Response,Request} from "express"
import User, { IUser } from "../Modules/UserModel"
import Missile, { IMissiles} from "../Modules/MissiliesModel"
import Organization, {IOrganization} from "../Modules/OrganizationModel"


interface IBuyDto {
    name:string,
    ganID:string,
}

interface LoginDTO {
    _id:string,
    isAdmin:boolean

}

// const login = async (user: userDTO , res:Response) => {
//     try {
//         const foundUser = await User.findOne({ name: user.name })
        
//         if (!foundUser) return  console.log ("User not found")

       
//         return {foundUser};

//     } catch (error) {
//         throw new Error("Failed to login")
//     }
// }

const buy = async (data:IBuyDto,req:Request,res:Response) : Promise<void>=>{
    try {
    const user = req.params.id
    const userById = await User.findById(user)
    const gan = req.params.id
    const ganById = await Missile.findById(gan)
        
    } catch (error) {
        throw new Error("Failed to bay")

        
    }
    

}

// const baying = async (data : userDTO) => {
//     const nueUser = data.name
//     const wepen = data.gan
//     const army = data.army
//     if(nueUser){
//         if(wepen){
//             if(army){
//                 console.log("the shop seccess");
//                 const afterbaywepn = await Missile.findByIdAndUpdate()
//                 const afterbayarmy = await Missile.findByIdAndUpdate()
                
//             }
//         }
//     }

// }



export {
    // login,
    // baying,
    buy
    
}