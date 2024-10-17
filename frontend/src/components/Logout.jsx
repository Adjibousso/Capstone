
//import what's needed to make this page work
import React, { useState, useEffect } from 'react';
import { auth } from './Firebase'; 
import { signOut, onAuthStateChanged } from 'firebase/auth'; 
import { useNavigate } from 'react-router-dom'; 

const Logout = () => {
    // track authentication state and initialize
    const [isAuthenticated, setIsAuthenticated] = useState(false); 
    const navigate = useNavigate(); 


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // user is signed in
                setIsAuthenticated(true);
            } else {
                // user not sign in 
                setIsAuthenticated(false);
            }
        });

        
        return () => unsubscribe();
    }, []);

    
    const handleLogout = async () => {
        try {
            await signOut(auth); 
            console.log("User logged out successfully");
            // navigate you to the home page if you log off
            navigate('/'); 
        } catch (error) {
            console.error("Error logging out:", error.message);
        }
    };

    return (
        <div>
            {/*  log out event button */}
            {isAuthenticated && (
                <button onClick={handleLogout}>
                    Logout 
                </button>
            )}
        </div>
    );
};

export default Logout;
