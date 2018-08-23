import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import { Head } from 'react-static'
import GlobalNav from 'GlobalNav';
//
import Routes from 'react-static-routes'

import './app.css'

const App = () => (
  <Router>
      <main>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#325" />
        </Head>
        <Routes />
        <GlobalNav />
      </main>
  </Router>
)

export default hot(module)(App)
