const express = require('express')
const app = express()
const port = 3000
const cors =require('cors')
require("dotenv").config()
// const { default: mongoose } = require('mongoose')
const mongoose =require('mongoose')



app.use(cors())
app.use(express.json())



app.post('/api/register',(req,res)=> {

    console.log(req.body)
    res.json({status:'ok'})
})






app.get('/', (req, res) => {
  res.send('Hello World! how are you?')
})


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
  mongoose.connect(process.env.MONGO_URL)
  .then(()=>{
    console.log("databse conntected")
  })
})
