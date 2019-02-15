import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { AuthPermissionRoute } from './routes'
import Help from '../modules/help'

class AppRoutes extends Component {

    render() {
        return (
            <Switch>
                <AuthPermissionRoute exact path={'/help'} component={Help} />
                {/* add n number routes in this switch statement */}
            </Switch>
        )
    }
}

export default withRouter(AppRoutes)
