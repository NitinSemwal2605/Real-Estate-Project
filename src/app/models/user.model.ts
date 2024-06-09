import mongoose , {Schema , Document, } from "mongoose";


// Created a user interface for type safety 
export interface User extends Document{
    userName : String;
    email : String;
    password : String;
    type : String;
    verifyCode : String;
    verifyCodeExpiry : Date;
    isVerified : Boolean;
    createdAt : Date;

}


// Created User Schema of user interface type 
const userSchema : Schema<User> = new Schema ({

    userName : {
        type : String,
        required : [true, "email is required"],
        unique : false,
        lowercase : true,
        trim : true
 },
    
    email : {
         type : String,
         required : true,
         unique : true,
         lowercase : true,
          match : [/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g, "Please enter a valid mail"]
},

    password : {
    type : String,
    required : [true, "password is required"]
},

verifyCode: {
    type : String,
    required : [true, "Verification Code is required"]
},

verifyCodeExpiry: {
    type : Date,
    required : [true, "Verification Code is required"]
},

isVerified : {
    type : Boolean,
    default : false
},

type : {
    type : String,
    required : true,
   },

    
});

const User= (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User",userSchema);   // (Check if a Model exists) || (Create one)

export default User;