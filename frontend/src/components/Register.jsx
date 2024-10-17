import React, { useState } from 'react';
import { auth } from './Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error("Passwords do not match", {
                position: "top-center"
            });
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            console.log(user);
            
            toast.success("User created successfully", {
               position: "top-center"
           });

            await axios.post('http://localhost:3000/api/register', {
                username,
                email,
                password
            });

        } catch (err) {
            console.error("Error registering user:", err.message);
            toast.error(err.message, {
                position: "bottom-center"
            });
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='formregister'>
                <h2>Register</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <br />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <br />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <br /> <br />
                <button type="submit" className='btnSignin'>Register</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Register;
