import Organization, {IOrganization} from "../Modules/OrganizationModel"

const alluser = async () => {
    try {
        const alluser = Organization.find()
        console.log(alluser);
        
        return alluser
        
    } catch (error) {
        throw new Error("error to find users")
        
    }
}

const findUser = async (userId:string) => {
    try {
        const user = await Organization.findById(userId)
        if(!user){
            return console.log("nut find this user");
            
        }
        return user
        
    } catch (error) {
        throw new Error("error to find this user")
        
    }
}

const deleteUser = async (userId:IOrganization) => {
    try {
        
        const user = await Organization.findOneAndDelete(userId.id)
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
        const users = await Organization.deleteMany()
    } catch (error) {
        throw new Error("error to find users")
        
    }
}

const updateUser = async (userData:IOrganization) => {
    
    try {
        const nueUser = await Organization.findOneAndUpdate(userData.id,userData,{new : true})
       
        
        return await nueUser?.save()
    } catch (error) {
        throw new Error("error to edit user")
        
    }
}

const adduser = async (userData:IOrganization) => {
    try {
        const nueUser = new Organization(userData)
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