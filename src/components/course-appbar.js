import React from 'react';

const AppBar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">Whiteboard</a>
                    <ul className="nav navbar-nav navbar-right text-light">
                        <li><a className="p-2 text-light" href="#">Dashboard</a></li>
                        <li className="d-none d-md-block">/</li>
                        <li><a className="p-2 text-light" href="#">Sign in</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
export default AppBar;