import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase';
import { toast,ToastContainer } from 'react-toastify';
import {Navigate, useNavigate} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      await signInWithEmailAndPassword(auth, email,password);
      console.log("You are logged in successfully")
      
      toast.success ("You are logged in successfully", {
        position:"top-center"

      });
      navigate('/Shop');
    }catch(error){
      console.log(error.message);
      toast.error(error.message,{
        position:"bottom-center"
      })
    }
    
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Sign In</button>
    </form>
    <ToastContainer/>
    </div>
  );
};

export default SignIn;
