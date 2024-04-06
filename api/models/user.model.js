import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username :{
        type: String,
        required: true,
        unique: true,
    },
    email :{
        type: String,
        required: true,
        unique: true,
    },
    password :{
        type: String,
        required: true,
    
    },

} , {timestamps: true}) /// adds2 extra info about each user which are time of creation and time of edit

 ////model
 const User =  mongoose.model('User', userSchema);
 ///then we need to export our model to use it anywhere in out application
 export default User;
