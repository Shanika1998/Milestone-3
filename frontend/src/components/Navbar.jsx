import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUser } from '../context/currentUser';
import './styles.css';

function AppNavbar() {
  const { currentUser, setCurrentUser } = useContext(CurrentUser);

  const handleSignOut = () => {
    // Perform actions to sign out the user (clear token, reset currentUser state, etc.)
    setCurrentUser(null);
    localStorage.removeItem('token');
  }

  let loginActions = (
    <>
      <li style={{ float: 'right' }}>
        <Link to="/signup">Sign Up</Link>
      </li>
      <li style={{ float: 'right' }}>
        <Link to="/login">Login</Link>
      </li>
    </>
  );

  if (currentUser) {
    loginActions = (
      <>
        <li style={{ float: 'right' }}>
          Logged in as {currentUser.firstName} {currentUser.lastName}
        </li>
        <li style={{ float: 'right' }}>
          <button className="cta-button" onClick={handleSignOut}>Sign Out</button>
        </li>
      </>
    );
  }

  return (
    <nav className="navbar">
      <h1>Diana's Adopt-A-Cat</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cats">Cats</Link>
        </li>
        <li>
          <Link to="/adopt">Adopt-A-Cat!</Link>
        </li>
        {loginActions}
      </ul>
    </nav>
  );
}

export default AppNavbar