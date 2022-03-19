import React from 'react';
import logo from '../logo.svg';

function Landing() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Go To Song Data
            </a>
        </header>
    )
}

export default Landing;