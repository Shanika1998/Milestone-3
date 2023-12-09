import { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { CurrentUser } from "../context/currentUser"



function LoginForm() {

    const history = useHistory()

    const { setCurrentUser } = useContext(CurrentUser)

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const [errorMessage, setErrorMessage] = useState(null)

        
    async function authenticateUser(credentials) {
        try {
            const response = await fetch('http://localhost:5002/authentication/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            });
    
            if (!response.ok) {
                throw new Error('Failed to authenticate')
            }
    
            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error('Authentication error: ' + error.message)
        }
    }
    
    // Updated handleSubmit function
    async function handleSubmit(e) {
        e.preventDefault();
    
        try {
            const data = await authenticateUser(credentials)
    
            setCurrentUser(data.user)
            localStorage.setItem('token', data.token)
            history.push('/');
        } catch (error) {
            setErrorMessage(error.message)
        }
    }

    return (
        <main>
            <h1>Login</h1>
            {errorMessage !== null
                ? (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )
                : null
            }
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-sm-6 form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            required
                            value={credentials.email}
                            onChange={e => setCredentials(prevCredentials => ({ ...prevCredentials, email: e.target.value }))}
                            className="form-input"
                            id="email"
                            name="email"
                        />
                    </div>
                    <div className="col-sm-6 form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            required
                            value={credentials.password}
                            onChange={e => setCredentials(prevCredentials => ({ ...prevCredentials, password: e.target.value }))}
                            className="form-input"
                            id="password"
                            name="password"
                        />
                    </div>
                </div>
                <input className="submit-btn" type="submit" value="Login" />
            </form>
            <footer>
          <p>Contact us: contact@adoptacatapp.com</p>
          <nav className='navbar'>
            <a href="/about">About</a>
            <a href="/faq">FAQs</a>
          </nav>
        </footer>
        </main>
    )
}

export default LoginForm