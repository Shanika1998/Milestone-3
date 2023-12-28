import { useState} from "react"
import { useHistory } from "react-router-dom"

function SignUpForm() {

	const history = useHistory()

	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: ''
	})

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:5002/authentication/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            if (response.ok) {
                history.push('/login');
            } else {
                // Handle unsuccessful signup
                console.error('Signup failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

	return (
		<main>
			<h1>Sign Up</h1>
			<form className="sform-container" onSubmit={handleSubmit}>
				<div className="row">
					<div className="col-sm-6 form-group">
						<label htmlFor="firstName">First Name</label>
						<input
							required
							value={user.firstName}
							onChange={e => setUser(prevState => ({ ...prevState, firstName: e.target.value }))}
							className="form-input"
							id="firstName"
							name="firstName"
						/>
					</div>
					<div className="col-sm-6 form-group">
						<label htmlFor="lastName">Last Name</label>
						<input
							required
							value={user.lastName}
							onChange={e => setUser(prevState => ({ ...prevState, lastName: e.target.value }))}
							className="form-input"
							id="lastName"
							name="lastName"
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6 form-group">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							required
							value={user.email}
							onChange={e => setUser(prevState => ({ ...prevState, email: e.target.value }))}
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
            				value={user.password}
            				onChange={e => setUser(prevState => ({ ...prevState, password: e.target.value }))}
            				className="form-input"
            				id="password"
            				name="password"
        				/>
   			 	</div>
			</div>
				<input className="submit-btn" type="submit" value="Sign Up" />
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

export default SignUpForm