import React from "react";
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
            <a className="navbar-brand" href="/">
                <h2 className="text-white">Michaels book search</h2>
            </a>
            <div id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item" id="home">
                        <Link to="/" className="nav-link">Search</Link>
                    </li>
                    <li className="nav-item" id="report">
                        <Link to="/saved" className="nav-link">Saved Books</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;