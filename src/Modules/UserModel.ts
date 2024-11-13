import mongoose ,  {Document,Schema} from "mongoose"

export interface IUser extends Document {
    _id:string,
    username:string
    password : string
    organization:string
    Zone?:true
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
    Zone:{
        type:Boolean,
        required:true
    }
})

export default mongoose.model<IUser>("User",UserSchema)