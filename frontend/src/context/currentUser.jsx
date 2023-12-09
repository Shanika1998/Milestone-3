import { createContext, useState, useEffect } from "react";

export const CurrentUser = createContext()

    function CurrentUserProvider({ children }) {
        const [currentUser, setCurrentUser] = useState(null);
    
        useEffect(() => {
            const token = localStorage.getItem('token');
            if (!token) return; // No token, no need to fetch user data
    
            const fetchUser = async () => {
                if (!token) return;
    
                try {
                    const response = await fetch('http://localhost:5002/authentication/profile', {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
    
                    if (!response.ok) {
                        throw new Error('Failed to fetch user data');
                    }
    
                    const user = await response.json();
                    setCurrentUser(user);
                } catch (error) {
                    console.error('Error fetching user data:', error);
                    setCurrentUser(null);
                }
            };
    
            fetchUser();
        }, [])
    
        return (
            <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
                {children}
            </CurrentUser.Provider>
        );
    }
    

export default CurrentUserProvider
