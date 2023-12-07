import { useContext } from 'react'
import {  Link } from "react-router-dom"
import { CurrentUser } from '../context/currentUser'

function AppNavbar() {
  

    const { currentUser } = useContext(CurrentUser)

    let loginActions = (
        <>
            <li style={{ float: 'right' }}>
            <Link to="/sign-up">Sign Up</Link>
            </li>
            <li style={{ float: 'right' }}>
            <Link to="/login">Login</Link>
            </li>
        </>
    )

    if (currentUser) {
        loginActions = (
            <li style={{ float: 'right' }}>
                Logged in as {currentUser.firstName} {currentUser.lastName}
            </li>
        )
    }
  return (
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cats">Cats</Link>
            </li>
            <li>
              <Link to="/cats/new">Add to Our Inventory</Link>
            </li>
            <li>
              <Link to="/adopt">Adopt a Cat!</Link>
            </li>
            {loginActions}
          </ul>
        </nav>
      );
    }

export default AppNavbar