
//import what's needed to make this page work
import React, { useState, useEffect } from 'react';
import { auth } from './Firebase'; 
import { signOut, onAuthStateChanged } from 'firebase/auth'; 
import { useNavigate } from 'react-router-dom'; 

const Logout = () => {
    // Track authentication state and initialize
    const [isAuthenticated, setIsAuthenticated] = useState(false); 
    const navigate = useNavigate(); 


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                setIsAuthenticated(true);
            } else {
                // No user is signed in
                setIsAuthenticated(false);
            }
        });

        
        return () => unsubscribe();
    }, []);

    
    const handleLogout = async () => {
        try {
            await signOut(auth); 
            console.log("User logged out successfully");
            navigate('/'); 
        } catch (error) {
            console.error("Error logging out:", error.message);
        }
    };

    return (
        <div>
            
            {isAuthenticated && (
                <button onClick={handleLogout}>
                    Logout
                </button>
            )}
        </div>
    );
};

export default Logout;
