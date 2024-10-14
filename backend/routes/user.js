import express from 'express';
import bcrypt from "bcrypt";
const router = express.Router();


router.post('./register', (req,res)=>{
    const{ username, email, password} = req.body;
    
})


export default router;