import React from "react";
import Background from '../images/songs.png';

const Home = () => {
    const sectionStyle =  {
        width: "70em",
        height: "40em",
        backgroundImage: `url(${Background})`
    };
        return (
        <div style={sectionStyle}>
            <h1 className="title is-1">Welcome</h1>
            <p>
                Switch to the <b>next tab</b> to view Songs Data
            </p>
        </div>
        )
}

export default Home;
