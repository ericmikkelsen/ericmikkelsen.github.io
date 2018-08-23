import React from 'react'
import { Link } from 'react-static'

class Breadcrumbs extends React.Component {
  render() {
    return (
          <ul className="breadcrumbs dn-p">
            {this.props.breadcrumbs.map( ( crumb, i ) => {
              if( crumb.url ){
                return <li 
                          className="breadcrumb"
                          id={ 'breadcrumb-' + i }
                          key={ 'breadcrumb-' + i }
                        >
                        <Link to={crumb.url}>{crumb.text}</Link>
                        <i> / </i>
                      </li>
              } else {
                return <li                          
                          className="breadcrumb"
                          id={ 'breadcrumb-' + i }
                          key={ 'breadcrumb-' + i }
                        >
                          <span>{crumb.text}</span>
                        </li>
              }
            } ) }
             
          </ul>
    );
  }
}


module.exports = {
  Breadcrumbs: Breadcrumbs
}