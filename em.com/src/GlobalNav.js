import React from 'react';
import { Router, Link } from 'react-static'

export default( () => (
    <nav className="nav dn-p">

        <h3>        
            <Link 
                className="nav__link"
                to="/" 
            >
                Home
            </Link>
        </h3>
        <p className="nav__excerpt">
            What are you even suppose to put on a homepage?
        </p>

        <h3>
            <Link 
                className="nav__link"
                to="/resume"
            >
                Resume
            </Link>
        </h3>
        <p className="nav__excerpt">
            "Liz Lemon numbers among my employees"
            <br/>
            <small>
                - John Francis Donaghy<br/>
                GE VP of EC TV &amp; Microwave Programming
            </small>
        </p>

    </nav>
) );
