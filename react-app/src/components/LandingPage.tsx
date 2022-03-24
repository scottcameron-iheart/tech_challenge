import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import iHeart from '../IHeartMedia_logo.svg'
import aws from '../Amazon_Web_Services_Logo.svg'

import './LandingPage.css'

function LandingPage() {
    return (
        <div className="Landing">
            <div className='intro'>
                <p>Hello,<img src={iHeart} className="iheart-logo" alt="i heart media logo" /> team</p>
                <p>Thank you for the opportunity to complete this coding challenge. I hope that I fufilled the requirments of the assignment
                    up to your team's standards. Looking forward to hearing from you after you have assesed my work.
                </p>
                <p> All the best, <br />-Henry</p>
            </div>
            <Link to="/songs">Go To Song Page</Link>
            <div className="logo-container">
                <h2>Made with: </h2>
                <img src={logo} className="react-logo" alt="react logo" />
                <h1>+</h1>
                <img src={aws} className="aws-logo" alt="aws logo" />
            </div>
        </div>
    )
}

export default LandingPage;