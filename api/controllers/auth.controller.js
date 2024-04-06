//request hena is the data we're taking from the user
// while respose is the data we send back to client side
 import User from '../models/user.model.js';
 import bcryptjs from 'bcryptjs'; //encrypting pass before adding data to db

const signup = async (req , res) =>{
    //this basically print all the data
   console.log(req.body);
   //but we want to destructure the data and save to our db
   const { username, email, password} = req.body;
   const hashedPassword = bcryptjs.hashSync(password,10);
   const newUser = new User({username,email, password: hashedPassword});
   // note that if the key and the value has the same name u don't have to use the passwprd : hashed
   //saving new user to db takes time based on ur internet conn
   // that why await here tells javascript to stay in that line till it's done
  try{

    await newUser.save()
    res.status(201).json({message : "User created successully"}); 

  }catch(error){
     res.status(500).json(error.message);
  }
  
};


export default signup;
