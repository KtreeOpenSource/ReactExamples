import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { requireAuthPermission } from './require-auth'

/**
 * https://github.com/ReactTraining/react-router/issues/4698#issuecomment-314419439
 */


export class AuthPermissionRoute extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      render: false
    }
  }

  async componentDidMount() {
    let authenticated = await requireAuthPermission(this.props.modelName,this.props.actionName)
    this.setState({ render: true, authenticated })
  }

  render() {
    let { component: Component, ...rest } = this.props
    return this.state.render ? (<Route
      {...rest}
      render={props =>
        this.state.authenticated ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: '/',
                state: { from: props.location, msg: "Unauthorized" }
              }}
            />
          )
      }
    />) : false
  }
}
