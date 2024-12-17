import {CookieOptions,Response,Request} from "express"
import User, { IUser } from "../Modules/UserModel"
import Missile, { IMissiles} from "../Modules/MissiliesModel"
import Organization, {IOrganization} from "../Modules/OrganizationModel"


interface IBuyDto {
    userId:string,
    ganID:string,
    orgId:string
}

interface LoginDTO {
    _id:string,

}

const login = async (user: LoginDTO , res:Response) => {
    try {
        const foundUser = await User.findOne({ name: user._id })
        
        if (!foundUser) return  console.log ("User not found")

       
        return {foundUser};

    } catch (error) {
        throw new Error("Failed to login")
    }
}



const buy = async (data:IBuyDto,req:Request,res:Response) : Promise<void>=>{
    try {
    const {userID,ganID,orgID} = req.body
    const userById = await User.findOne({userID})
    const ganById = await Missile.findOne({ganID})
    const orgById = await Organization.findOne({orgID})

    {inc :  { orgById?.budget} - { inc:{ganById}}}
  
    const neuOrg = await Organization.findOneAndUpdate(orgById?.resources.map((amount) => amount.amount + 1))
    // const neuBBudget = await Organization.findOneAndUpdate(orgById?.budget  ganById?.price())
    
    



        
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
    login,
    // baying,
    buy
    
}