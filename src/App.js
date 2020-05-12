import React from 'react'

import history from './history'
import { Router, Route, Switch } from 'react-router-dom'

import { Home } from './pages/Home'
import { AnimatePresence } from 'framer-motion'
import { GlobalStyles } from './styles/GlobalStyles'
import { TasksContextProvider } from './context/TasksContext'

export const App = () => {
  return (
    <TasksContextProvider>
      <Router history={history}>
        <GlobalStyles />
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter>
              <Switch>
                <Route exact path='/' component={Home} />
              </Switch>
            </AnimatePresence>
          )}
        />
      </Router>
    </TasksContextProvider>
  )
}
