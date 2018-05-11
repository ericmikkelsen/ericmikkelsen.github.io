import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'
//

export default withRouteData(( {page} ) => (

  <article>
      <header>
        <h1>{page.title}</h1>
      </header>
      {convert(page.contents)}
  </article>

))
