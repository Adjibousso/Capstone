import mongoose from "mongoose";

const UserSchema =new mongoose.Schema(
    {
        username:{type:String, required:true},
        email:{type:String, required:true,unique},
        password:{type:String, required:true},
        quote:{type:string}

    },
    // {collection:user-data}
)

const UserModel = mongoose.model("User", UserSchema)

module.exports= UserModel