import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';
import { PublicRoute } from './PublicRoute';

import HomeScreen from '../pages/home/HomeScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        path="/"
                        component={HomeScreen}
                    />
                </Switch>
            </div>
        </Router>
    );
}