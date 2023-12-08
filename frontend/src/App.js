import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import AppNavbar from './components/Navbar'
import Home from "./components/Home"
import LoginForm from "./users/LoginForm"
import SignUpForm from './users/signupForm'
import AllCats from './components/allCats'
import CatDetails from './components/catDetails';
import AdoptionForm from './components/adoptionForm';
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
            <Route exact path="/cats" component={AllCats}/>
            <Route exact path="/cats/:id" component={CatDetails}/>
            <Route exact path="/adopt" components={AdoptionForm}/>

        
          </Switch>
    </BrowserRouter>
    </CurrentUserProvider>
  );
}

export default App;
