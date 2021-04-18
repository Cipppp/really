import React from 'react';
import './Header.css';

function Navbar() {
    return (
        <div>
            <div className="navbar">
                <a href="#logo" className="logo">
                    Really?
                </a>
                <a href="#science">Science</a>
                <a href="#technology">Technology</a>
                <a href="#physics">Physics</a>
            </div>
        </div>
    );
}

export default Navbar;
