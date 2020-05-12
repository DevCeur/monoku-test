import React from 'react'

import history from './history'
import { Router, Route, Switch } from 'react-router-dom'

import { Home } from './pages/Home'

export const App = () => {
  return (
    <Router history={history}>
      <Route
        render={({ location }) => (
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        )}
      />
    </Router>
  )
}
