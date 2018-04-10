import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from './App'
import test from './pages/test'

class RouterMap extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path='/' component={App}>
                    <Route path='/pages/test' component={test}/>
                </Route>
            </Router>
        )
    }
}

export default RouterMap