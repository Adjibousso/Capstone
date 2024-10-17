 
const express = require('express')
const app = express()
const port = 3000
const cors =require('cors')
require("dotenv").config()
const mongoose =require('mongoose')
const connectDB= require('./config/db.js')
const donationRoute =require('./routes/donateRoute.js')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); 
// Import user routes
const userRoutes = require('./routes/user');

// Middleware for user routes
app.use('/api/users', userRoutes);



//middleware 
app.use(cors())
app.use(express.json())


// async funtion and route to register page
app.post('/api/register',async (req,res)=> {

    console.log(req.body)
    try {
        const user =await UserActivation.create({
            name: req.body.name,
            email:req.body.email,
            password:req.body.password,
        })
        res.json({status:'ok'})
    } catch (err){
        res.json({status:'error', error:'email already in use'})
    }
    
})
//midleware for donation 
app.use('/api', donationRoute);

//api post for sign-in
app.post('/api/signin', (req, res) => {
    const { email, password } = req.body;
    
    res.json({ message: 'Login successful' });
})

//test 
app.get('/', (req, res) => {
  res.send('Tomorrow will be better')
})

//middleware 
app.use('/api/user', require('./routes/user.js'));

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
  //mongoDB connection
  mongoose.connect(process.env.MONGO_URL)
  .then(()=>{
    console.log("databse is conntected")
  })
})
