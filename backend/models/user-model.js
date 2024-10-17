const mongoose = require('mongoose')

//user schema
const UserSchema =new mongoose.Schema(
    {
        username:{type:String, required:true},
        email:{type:String, required:true, unique:true},
        password:{type:String, required:true},
        quote:{type:String}

    },
    // {collection:user-data}
)
// Create index on email field
UserSchema.index({ email: 1 });

// Or use compound index
UserSchema.index({ email: 1, name: 1 });


const UserModel = mongoose.model("User", UserSchema)

module.exports= UserModel