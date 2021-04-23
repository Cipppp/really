import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

function Header() {
    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <>
            <nav className="navbar sticky">
                <div className="hamburger" onClick={handleToggle}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <ul className={`nav-links ${isActive ? 'open' : ''}`}>
                    <Link className="logo" onClick={() => scroll.scrollToTop()}>
                        Really?
                    </Link>
                    <Link to="/" onClick={handleToggle}>
                        Home
                    </Link>
                    <Link to="/economy" onClick={handleToggle}>
                        Economy
                    </Link>
                    <Link to="/people" onClick={handleToggle}>
                        People
                    </Link>
                    <Link to="/cleanenergy" onClick={handleToggle}>
                        Clean Energy
                    </Link>
                </ul>
            </nav>
        </>
    );
}

export default Header;
