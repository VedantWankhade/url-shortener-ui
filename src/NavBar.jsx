import React from 'react';
import { Link, Switch } from 'react-router-dom';

export default function NavBar() {

    return (
        <nav className="nav-bar">
            <Link to='/' className='nav-item'>Home</Link>
            <Link to="/history" className='nav-item'>History</Link>
        </nav>
    )
}