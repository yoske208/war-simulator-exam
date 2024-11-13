import mongoose ,  {Document,Schema} from "mongoose"

export interface IUser extends Document {
    _id:string,
    username:string
    password : string
    organization:string
    zone?:string
}

const UserSchema : Schema = new Schema ({
    username:{
        type:String,
        required : true
    },
    organization:{
        type:String,
        required : true
    },
    password:{
        type:String,
        required : true
    },
    zone:{
        type:String,
        required:true
    }
})

export default mongoose.model<IUser>("users",UserSchema)