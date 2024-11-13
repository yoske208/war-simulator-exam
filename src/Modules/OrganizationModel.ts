import mongoose ,  {Document,Schema} from "mongoose"

export interface IUser extends Document {
    _id:string,
    name:string
    resources :[{name:string,amount:number}]
    budget:number
    
}

const UserSchema : Schema = new Schema ({
    name:{
        type:String,
        required : true
    },
    resources:[
        {
        name :{
        type:String,
        required : true
    },
    amount:{
        type:Number,
        required : true

    }
}
],
budget:{
    type:Number,
    required : true
},
    
})

export default mongoose.model<IUser>("organization",UserSchema)