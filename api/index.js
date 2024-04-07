import express from 'express';
///we installed nodemon in order to listen automatically to any changes inside backend without having to restart
import mongoose from 'mongoose';
import dotenv from 'dotenv';  
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
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
app.use(express.json());
///this allows json as the input of our backend
///note that we're using INSOMNIA to test our backend since UI IS NOT YET READY

app.listen( 3000, () => { 
    console.log("Server Listening On Port 3000!!");
});

//api route is an url that allows us to access api resources
app.use( '/api/user' , userRoutes);
app.use('/api/auth', authRoutes);


///middleware
app.use((err, req , res , next) => {
    const statusCode = res.statusCode || 500;
    const message = res.message || 'Internal Server Error!';
    return res.status(statusCode).json({
      success: false,
      message,
      statusCode
    });
});