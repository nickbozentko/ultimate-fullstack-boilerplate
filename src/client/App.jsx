import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Home from './Home/Home.jsx';
import NotFound from './NotFound/NotFound.jsx';

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route
                        path="/"
                        component={Home}
                        exact
                    />
                    <Route
                        path="*"
                        component={NotFound}
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}
