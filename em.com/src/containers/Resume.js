
import React from 'react'
import { withRouteData, Head } from 'react-static'
import convert from 'htmr'
import {Breadcrumbs} from './components/Breadcrumbs';
import {WorkHistory} from './components/WorkHistory';

export default withRouteData(({ resume }) => (
  <article>
    <Head>
      <title>Resume</title>
    </Head>
    <Breadcrumbs breadcrumbs={resume.breadcrumbs} />
    <h1 className="header--print dn-s">Eric Mikkelsen</h1>

    <h1 id="content" className="dn-p">{resume.title}</h1>

    {convert(resume.contents)}
    <h2>Skills</h2>
    <ul className="skills">
      {resume.skills.map(function(skill, i){
          return <li
              className="skill"
              id={skill.i}
              key={i}
            >
                {skill}
            </li>
      })}
    </ul>
    <WorkHistory workHistory={resume.workHistory} />
  </article>
))
