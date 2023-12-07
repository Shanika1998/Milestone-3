import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import AppNavbar from './components/Navbar'
import Home from "./components/Home"
import LoginForm from "./users/LoginForm"
import SignUpForm from './users/signupForm';
import CurrentUserProvider from './context/currentUser';

function App() {
  return (
    <CurrentUserProvider>
    <BrowserRouter>
        <AppNavbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/sign-up" component={SignUpForm} />
            <Route exact path="/login" component={LoginForm} />
        
          </Switch>
    </BrowserRouter>
    </CurrentUserProvider>
  );
}

export default App;
