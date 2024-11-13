import mongoose ,  {Document,Schema} from "mongoose"

export interface IUser extends Document {
    _id:string,
    name:string
    description : string
    speed:number
    intercepts:[string]
    price:number

}

const UserSchema : Schema = new Schema ({
    name:{
        type:String,
        required : true
    },
    description:{
        type:String,
        required : true
    },
    speed:{
        type:[Number],
        required : true
    },
    intercepts:{
        type:Boolean,
        
    },
    price:{
        type:Number,
        
    }
})

export default mongoose.model<IUser>("missiles",UserSchema)