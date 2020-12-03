import React from 'react'
import { Route,BrowserRouter as Router, Switch } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './components/pages/Home';
import './Site.css'

 function Site() {
    return (

            <Router>
                <NavBar />
                <Switch>
                    <Route path='/' exact component = {Home}/>
                </Switch>
            </Router>

    );
}

export default Site;