import React from "react";
import './Footer.css';

function Footer(){
    return(
    <>

    {/* Main-Container */}
        <div className="container">

            {/* row one */}
            <div className="row1">
                    <p>HOME</p>
                    <p>ABOUT</p>
                    <p>SERVICES</p>
                {/*Centeral  Img in row one */}
                <img src="src/assets/Logo.png" alt="" />
                    <p>PORTFOLIO</p>
                    <p>BLOG</p>
                    <p>CONTACT</p>
            </div>
            <div className="row2">
                <p>Lorem ipsum dolor sit amet consectetur. Morbi volut tempus posuere viverra massa fames sed. Dignissim urisus et ac egestas dignissim.</p>
            </div>
            <div className="row3">
                
            </div>
            <div className="row4">
                Copyright 2024 All Rights Reserved
            </div>
        </div>
    </>
    );
}

export default Footer;