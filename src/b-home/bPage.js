import React from "react";

export default function BPage() {
    const pageStyle = {
            fontFamily: 'Inter, sans-serif', // Specify Inter as the primary font
    };

    return (
        <div className="bPage--style" style={pageStyle}>
            <div className="bPage--left">
                <p className="bph--who">Karl Tammehoid</p>
                <p className="bph--what">Software Development Student</p>
                <p className="bph--why">I build immersive and user-friendly experiences,
                focused on creativity and functionality.</p>
                <div className="bph--nav">
                    <p>ABOUT</p>
                    <p>EXPERIENCE</p>
                    <p>PROJECTS</p>
                </div>
                <div className="bph--images">
                    <a href="https://github.com/scytheggg" target="_blank" rel="noreferrer">
                        <img className="github--logo" src="./photos/github-logo.png" alt="Github"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/tammehoidkarl/" target="_blank" rel="noreferrer">
                        <img className="linkedin--logo" src="./photos/linkedin-logo.png" alt="LinkedIn"></img>
                    </a>
                    <a href="mailto:tammehoidkarl@gmail.com?subject=Subject%20of%20the%20email&body=Body%20of%20the%20email" target="_blank" rel="noreferrer">
                        <img class="mail--logo" src="./photos/mail-logo.png" alt="Mail"></img>
                    </a>
                </div>
            </div>
            <div className="bPage--right">

            </div>
        </div>
    )
}  