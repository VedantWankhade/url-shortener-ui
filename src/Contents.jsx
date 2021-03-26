import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Shortener from './Shortener.jsx';
import History from './Histoy.jsx';

function NotFound() {
    return (
        <p>You Lost?</p>
    )
}

export default function Contents() {

    return (
        <Switch>
            <Route path="/history" component={History} />
            <Route path="/" component={Shortener} />
            <Route component={NotFound} />
        </Switch>

    )
}