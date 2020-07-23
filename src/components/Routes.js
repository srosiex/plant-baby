import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./Login"
import Signup from "./Signup"
import NavBar from "./NavBar"
import Home from './Home'



const Routes = () => {

    return (
        <Router>
            <NavBar />
            <div>
                <Switch>
                    <Route exact path="/home" render={(routerProps)=>
                        <Home {...routerProps} />}>
                        </Route>
                    <Route exact path="/login" render={(routerProps) =>
                        <Login history={routerProps.history}
                        />}>
                    </Route>
                    <Route exact path="/signup" render={(routerProps) =>
                        <Signup {...routerProps}
                        />}>
                    </Route>
                </Switch>
            </div>
        </Router>

    )
}

export default Routes