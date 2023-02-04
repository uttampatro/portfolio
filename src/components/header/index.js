import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Header() {
    return (
        <div className="header">
            <div className="headerName">
                <h2>uttam's portfolio</h2>
            </div>
            <div className="headerPages">
                <div>
                    <Link style={{ textDecoration: 'none' }} to="/">
                        <h3>Home</h3>
                    </Link>
                </div>
                <div>
                    <Link style={{ textDecoration: 'none' }} to="/projects">
                        <h3>Projects</h3>
                    </Link>
                </div>
                <div>
                    <Link style={{ textDecoration: 'none' }} to="/blogs">
                        <h3>Blogs</h3>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
