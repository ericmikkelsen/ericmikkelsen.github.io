import convert from 'htmr'
import React from 'react'
import { Head, Link, Router, withRouteData  } from 'react-static'

import { Breadcrumbs } from './components/Breadcrumbs';

export default withRouteData(( {page} ) => (

  <article>
      <Head>
        <meta name="theme-color" content="#325" />
        <title>{page.title}</title>
      </Head>
      <header>
        <Breadcrumbs breadcrumbs={page.breadcrumbs} />
        <h1>{page.title}</h1>
      </header>
      {convert(page.contents)}
  </article>

))
