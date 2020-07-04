import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Home from './Home/Home.jsx';
import NotFound from './NotFound/NotFound.jsx';

const App = () => {
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

export default App;
