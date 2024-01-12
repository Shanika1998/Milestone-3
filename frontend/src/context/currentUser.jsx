import { createContext, useState, useEffect } from "react"

export const CurrentUser = createContext()

function CurrentUserProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            setLoading(false);
            return;
        }

        const fetchUser = async () => {
            try {
                const response = await fetch('http://localhost:5002/users/current-user', {
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
                setLoading(false);
            }
        }

        fetchUser()

    }, [])
    
        return (
            <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
               {loading ? (
                <div>Loading...</div>
            ) : (
                children
            )}
            </CurrentUser.Provider>
        );
    }
    

export default CurrentUserProvider
