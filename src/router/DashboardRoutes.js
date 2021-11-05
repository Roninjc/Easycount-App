import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { DashboardScreen } from '../components/dashboard/DashboardScreen';
import { MonthScreen } from '../components/month/MonthScreen';
import { NavBar } from '../components/ui/NavBar';

export const DashboardRoutes = () => {
    return (
        <>
            <NavBar />
            <div>
                <Switch>
                    <Route exact path="/" component={ DashboardScreen } />
                    <Route exact path="/month" component={ MonthScreen } />

                    <Redirect to="/" />
                </Switch>
                {/* <Switch>
                    <Route exact path="/dash" component={ DashboardScreen } />
                    <Route exact path="/month/:monthName" component={ MonthScreen } />
                    <Route exact path="/month" component={ MonthScreen } />

                    <Redirect to="/dash" />
                </Switch>     */}
            </div>   
        </>
    )
}
