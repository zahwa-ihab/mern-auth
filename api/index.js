import express from 'express';
///we installed nodemon in order to listen automatically to any changes inside backend without having to restart
import mongoose from 'mongoose';
import dotenv from 'dotenv';  
import userRoutes from './routes/user.route.js'
///dotenv allows us to access variables inside .env file 
dotenv.config();
mongoose.connect(process.env.MONGO)
.then(
    () => {
        console.log('connected to mongoDB');
    }
).catch(
    (err) => {
        console.log(err);
    }
);

const app= express();


app.listen( 3000, () => { 
    console.log("Server Listening On Port 3000!!");
});

//api route is an url that allows us to access api resources
app.use( '/api/user' , userRoutes);