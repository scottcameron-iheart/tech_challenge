import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

import './LandingPage.css'

function LandingPage() {
    return (
        <header className="Landing">
            <img src={logo} className="logo" alt="logo" />
            <Link to="/songs">Go To Song Page</Link>
        </header>
    )
}

export default LandingPage;