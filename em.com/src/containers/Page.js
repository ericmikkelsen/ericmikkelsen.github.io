import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'
import { Head } from 'react-static'
//

export default withRouteData(( {page} ) => (

  <article>
      <Head>
        <title>{page.title}</title>
      </Head>
      <header>
        <h1>{page.title}</h1>
      </header>
      {convert(page.contents)}
  </article>

))
