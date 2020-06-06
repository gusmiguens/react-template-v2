import { Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import createHistory from 'history/createBrowserHistory'
import Dashboard from '../components/Dashboard'
import NotFound from '../components/NotFound'
import Login from '../components/Login'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory()

export const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path='/' component={Login} exact={true} />
                <PrivateRoute path='/dashboard' component={Dashboard} exact={true} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter