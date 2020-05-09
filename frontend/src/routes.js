import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { isAuthenticated } from "./services/auth";

import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Projects from './pages/Projects';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{ pathname: "/", state: { from: props.location } }} />
                )
        }
    />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={SignIn}></Route>
            <PrivateRoute path="/home" component={Home}></PrivateRoute>
            <PrivateRoute path="/projects" component={Projects}></PrivateRoute>
        </Switch>
    </BrowserRouter>
);

export default Routes;
