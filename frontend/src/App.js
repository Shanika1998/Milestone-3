import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import AppNavbar from './components/Navbar'
import Home from "./components/Home"
import LoginForm from "./users/LoginForm"
import SignUpForm from './users/signupForm'
import AllCats from './components/allCats'
import CatDetails from './components/catDetails';
import NewAdoptionForm from './components/adoptionForm'
import CurrentUserProvider from './context/currentUser'
import About from './components/About'

function App() {
  return (
    <CurrentUserProvider>
    <BrowserRouter>
        <AppNavbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={SignUpForm} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/cats" component={AllCats}/>
            <Route exact path="/cats/:id" component={CatDetails}/>
            <Route exact path="/adopt" component={NewAdoptionForm}/>
            <Route exact path='/about' component={About}/>
        
          </Switch>
    </BrowserRouter>
    </CurrentUserProvider>
  );
}

export default App;
