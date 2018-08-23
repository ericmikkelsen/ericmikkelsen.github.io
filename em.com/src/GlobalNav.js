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
            What are you even supposed to put on a homepage?
        </p>

        <h3>
            <Link 
                className="nav__link"
                to="/portfolio"
            >
                Portfolio
            </Link>
        </h3>
        <p className="nav__excerpt">
            Creativity is like a friendly bird
            <br/>
            <small>
                - Liz Lemon<br/>
                Show Runner, TGS
            </small>
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
            Liz Lemon numbers among my employees
            <br/>
            <small>
                - Jack Donaghy<br/>
                VP, Microwave Programming
            </small>
        </p>

        <Link 
            className="nav__link"
            to="https://www.linkedin.com/in/eric-mikkelsen-073a3315a/"
        >
            LinkedIn
        </Link>


        <Link 
            className="nav__link"
            to="mailto:eric@ericmikkelsen.com"
        >
            eric@ericmikkelsen.com
        </Link>

    </nav>
) );
