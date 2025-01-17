const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt'); // Added bcrypt import
const EmployeeModel = require('./Schema/Employee');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Today')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Login User
app.post('/Login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await EmployeeModel.findOne({ email: email });

    if (!user) {
      return res.status(400).json({ error: "No User Found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ error: "Wrong Password" });
    }

    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Register User
app.post('/Register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the email already exists
    const existingUser = await EmployeeModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user (assuming EmployeeModel represents your user schema)
    const newUser = new EmployeeModel({ name, email, password: hashedPassword });
    await newUser.save();
    res.json(newUser); // Respond with the created user object
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Error in registration' });
  }
});

//Delete User

app.delete("/Delete",async(req,res)=>{
  const {email,password}=req.body
  
  try{
    const user=await EmployeeModel.findOne({email:email})
    if(user){
      const isMatch=await bcrypt.compare(password,user.password)
      if(isMatch){
        await EmployeeModel.findOneAndDelete({email:email})
        res.json({message:"User Deleted"})
      }
      else{
        res.status(400).json({error:"Wrong Password"})
      }
    }
     
  }catch(err){}

})


app.listen(4000, () => console.log('Server started on port 4000'));
