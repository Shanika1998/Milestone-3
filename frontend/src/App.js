import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import AppNavbar from './components/Navbar'
import Home from "./components/Home"
import LoginForm from "./users/LoginForm"
import SignUpForm from './users/signupForm';

function App() {
  return (
    <BrowserRouter>
        <AppNavbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/sign-up" component={SignUpForm} />
            <Route exact path="/login" component={LoginForm} />
        
          </Switch>
    </BrowserRouter>
  );
}

export default App;
