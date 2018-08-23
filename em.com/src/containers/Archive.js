import React from 'react'
import { Head, Link, Router, withRouteData  } from 'react-static'
import { Breadcrumbs } from './components/Breadcrumbs';
//

export default withRouteData(({ breadcrumbs, posts, title }) => (
  <article>
    <Head>
      <title>{title}</title>
    </Head>
    <Breadcrumbs breadcrumbs={breadcrumbs} />
    <h1 className="f500">{title}</h1>
    <ul className="ArchiveList">
      {posts.map(post => (
        <li 
          className="ArchiveList__post"
          key={post.slug}
        >

          <Link
            className="dib f600"
            to={`/portfolio/${post.permalink}`}
          >
            {post.title}
          </Link>

          {post.excerpt && 
            <p>
              {post.excerpt}
            </p>
          }
          <Link 
              className="dib f300"
              to={`/portfolio/${post.permalink}`}
            >
              Read my notes on building<br />{post.title}.
          </Link>
        </li>
      ))}
    </ul>
  </article>
))
