import React from 'react';
import {Link} from 'react-router-dom';

const AppBar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/courses/table">Whiteboard</Link>
                    <ul className="nav navbar-nav navbar-right text-light">
                        <li><Link className="p-2 text-light" to="/courses/table">Dashboard</Link></li>
                        <li className="d-none d-md-block">/</li>
                        <li><Link className="p-2 text-light" to="/courses/table">Sign in</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
export default AppBar;