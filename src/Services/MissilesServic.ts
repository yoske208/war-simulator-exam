import Missile, {IMissiles} from "../Modules/MissiliesModel"

const alluser = async () => {
    try {
        const alluser = Missile.find()
        console.log(alluser);
        
        return alluser
        
    } catch (error) {
        throw new Error("error to find users")
        
    }
}

const findUser = async (userId:string) => {
    try {
        const user = await Missile.findById(userId)
        if(!user){
            return console.log("nut find this user");
            
        }
        return user
        
    } catch (error) {
        throw new Error("error to find this user")
        
    }
}

const deleteUser = async (userId:IMissiles) => {
    try {
        
        const user = await Missile.findOneAndDelete(userId.id)
        if(!user){
            throw new Error("user not find")
        }
        
        return user;
        
    } catch (error) {
        throw new Error("error to delete this user")
        
    }
}

const deleteAll = async () => {
    try {
        const users = await Missile.deleteMany()
    } catch (error) {
        throw new Error("error to find users")
        
    }
}

const updateUser = async (userData:IMissiles) => {
    
    try {
        const nueUser = await Missile.findOneAndUpdate(userData.id,userData,{new : true})
       
        
        return await nueUser?.save()
    } catch (error) {
        throw new Error("error to edit user")
        
    }
}

const adduser = async (userData:IMissiles) => {
    try {
        const nueUser = new Missile(userData)
        await nueUser.save()
        return nueUser
    } catch (error) {
        throw new Error("error to add")
        
    }

}



export{
    alluser,
    findUser,
    deleteUser,
    deleteAll,
    updateUser,
    adduser,
    

}