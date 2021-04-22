import React from 'react';
import './Header.css';

function Header() {
    return (
        <>
            <div className="navbar sticky">
                <a href="#logo" className="logo">
                    Really?
                </a>
                <a href="#science">Science</a>
                <a href="#technology">Technology</a>
                <a href="#physics">Physics</a>
            </div>
        </>
    );
}

export default Header;
