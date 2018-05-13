
import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'
//

export default withRouteData(({ resume }) => (
  <article>
    <h1 id="content" className="dn-p">{resume.title}</h1>
    <div className="header--print dn-s">
      <h1 >Eric Mikkelsen</h1>
    </div>
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
    <section className="break-avoid dib">
      <h2>Work History</h2>
      {resume.workHistory.map(function(job, i){
          return <div
              className="job"
              id={job.i}
              itemScope 
              itemType="http://schema.org/Organization"
              key={i} 
            >
              <h3 itemProp="name">
                {job.organization}
              </h3>
              <p itemProp="jobTitle">
                <strong>{job.jobTitle}</strong>
              </p>
              <time itemProp="jobTitle">
                {job.date}
              </time>
              <p
                className="job__description" 
                itemProp="description"
              >
                {job.description}
              </p>
            </div>
      })}
    </section>
  </article>
))
