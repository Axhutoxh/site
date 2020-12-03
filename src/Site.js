import React from 'react'
import { Route,BrowserRouter as Router, Switch } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import './Site.css'

 function Site() {
    return (

            <Router>
                <NavBar />
                <Switch>
                    <Route path='/' exact component = {Home}/>
                    <Route path='/services' component={Services} />
                    <Route path='/products' component={Products} />
                    <Route path='/sign-up' component={SignUp} />
                    
                </Switch>
            </Router>

    );
}

export default Site;