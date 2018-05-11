import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import GlobalNav from 'GlobalNav';

//
import Routes from 'react-static-routes'

import './app.css'

const App = () => (
  <Router>
      <main>
        <Routes />
        <GlobalNav />
      </main>
  </Router>
)

export default hot(module)(App)
