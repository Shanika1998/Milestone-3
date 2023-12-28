import { createContext, useState, useEffect } from "react"

export const CurrentUser = createContext()

function CurrentUserProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            setLoading(false); // No token, set loading to false
            return;
        }

        const fetchUser = async () => {
            try {
                const response = await fetch('http://localhost:5002/authentication/login', {
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
            } finally {
                setLoading(false); // Set loading to false after fetch attempt
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
