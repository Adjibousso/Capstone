 
const express = require('express')
const app = express()
const port = 3000
const cors =require('cors')
require("dotenv").config()
const mongoose =require('mongoose')
const connectDB= require('./config/db.js')
const donationRoute =require('./routes/donateRoute.js')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); 
//import connectDB from './config/db.js'

app.use(cors())
app.use(express.json())



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

app.use('/api', donationRoute);

app.post('/api/signin', (req, res) => {
    const { email, password } = req.body;
    
    res.json({ message: 'Login successful' });
})


app.get('/', (req, res) => {
  res.send('Hello World! how are you?')
})


app.use('/api/users', require('./routes/user.js'));

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
  mongoose.connect(process.env.MONGO_URL)
  .then(()=>{
    console.log("databse conntected")
  })
})
