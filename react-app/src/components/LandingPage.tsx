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
                <p>Thank you for the opportunity to submit this coding challenge. I am very excited about the prospect of working and learning with all of you!
                    React is one of my favorite frameworks, and AWS SAM with Lambda functions also seems very appealing (this is my first time using it).
                    I hope you find my code up to the standards of your team, and feel free to reach out to me if you have any questions or comments
                    at <a href='mailto: henry.a.kellam@gmail.com'>henry.a.kellam@gmail.com</a>.
                </p>
                <p>
                    Click the link below to view the song table that displays all of the provided song data.
                    Click any of the headers to sort the songs in ascending order by that header, then click again to alternate the sort order.
                    Hope you enjoy, and I look forward to hearing from you soon.
                </p>
                <p> All the best, <br />-Henry</p>
            </div>
            <Link to="/songs">Click here to view the song table</Link>
            <footer className="logo-container">
                <h2>Made with: </h2>
                <img src={logo} className="react-logo" alt="react logo" />
                <h1>+</h1>
                <img src={aws} className="aws-logo" alt="aws logo" />
            </footer>
        </div>
    )
}

export default LandingPage;