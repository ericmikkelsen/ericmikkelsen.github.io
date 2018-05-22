import React from 'react'
import { Link } from 'react-static'

class WorkHistory extends React.Component {
  render() {
    return (
        <section>
            <h2>Work History</h2>
                {this.props.workHistory.map( ( job, i ) => {
                    return <div
                                className="job"
                                id={ 'job-' + i }
                                key={ 'job-' + i }
                                itemScope 
                                itemType="http://schema.org/Organization"
                            >
                            <h3 itemProp="name">{job.organization}</h3>
                            <p itemProp="jobTitle">{job.jobTitle}</p>
                            <p>{job.date}</p>
                            <p
                                className="job__description" 
                                itemProp="description"
                            >
                                {job.description}
                            </p>
                            
                        </div>
                } ) }
          </section>
    );
  }
}


module.exports = {
  WorkHistory: WorkHistory
}