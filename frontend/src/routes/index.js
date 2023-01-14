import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../views/Home';
import Empresa from '../views/Empresa';

export default function Routes() {

       
    return (
        <BrowserRouter>

            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/empresa" exact component={Empresa} />
                <Route path="/empresa/:id" exact component={Empresa} />
            </Switch>

        </BrowserRouter>
    )
}
