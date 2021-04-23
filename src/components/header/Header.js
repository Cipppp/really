import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <nav className="navbar sticky">
                <Link to="/" className="logo">
                    Really?
                </Link>
                <Link to="/cleanenergy">Clean Energy</Link>
                <Link to="/people">People</Link>
                <Link to="/economy">Economy</Link>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default Header;
