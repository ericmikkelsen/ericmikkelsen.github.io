import convert from 'htmr'
import React from 'react'
import { Head, Link, Router, withRouteData  } from 'react-static'

import { Breadcrumbs } from './components/Breadcrumbs';

export default withRouteData(( {page} ) => (

  <article>
      <Head>
        <title>{page.title}</title>
      </Head>
      <Breadcrumbs breadcrumbs={page.breadcrumbs} />
      
      <h1>{page.title}</h1>
      {page.image && 
        <img 
          alt=''
          aria-hidden='true'
          className='FeaturedImage'
          src={page.image} 
        /> 
      }

      {convert(page.contents)}
  </article>

))
