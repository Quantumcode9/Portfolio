import React  from "react";
import aboutDetails from '../data/aboutDetails.json';

const Intro = () => {

    return (
        <div className="intro">
        <h3>{aboutDetails.name}: Portfolio</h3>
        <p>Here you can find some of my projects and contact information.</p>
        <h3>Lets build something together!</h3>
        </div>
        
    );
    }

export default Intro;

