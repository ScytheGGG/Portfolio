import React from "react";

export default function BPage() {
    const pageStyle = {
        fontFamily: 'Calibri, Inter, sans-serif', // Specify calibri as the primary font
    };

    const leftStyle = {
        position: 'sticky',
        flex: '0 0 300px',
    };

    const rightStyle = {
        flex: '1', // Flex grow to fill remaining space
        overflowY: 'auto', // Enable vertical scrolling if content overflows
    };

    return (
        <div className="bPage--style" style={pageStyle}>
            <div className="bPage--left" style={leftStyle}>
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
                        <div className="github--logo">
                            <img className="filtered github--filtered" src="./photos/github-logo-filtered.png" alt="Github Filtered" width="24" height="23" />
                            <img className="normal github--normal" src="./photos/github-logo.png" alt="Github Normal" width="24" height="23" />
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/tammehoidkarl/" target="_blank" rel="noreferrer">
                        <div className="linkedin--logo">
                            <img className="filtered linkedin--filtered" src="./photos/linkedin-logo-filtered.png" alt="LinkedIn Filtered" width="22" height="22" />
                            <img className="normal linkedin--normal" src="./photos/linkedin-logo.png" alt="LinkedIn Normal" width="22" height="22" />
                        </div>
                    </a>
                    <a href="mailto:tammehoidkarl@gmail.com" target="_blank" rel="noreferrer">
                        <div className="mail--logo">
                            <img className="filtered mail--filtered" src="./photos/mail-logo-filtered.png" alt="Mail Filtered" width="25" height="22" />
                            <img className="normal mail--normal" src="./photos/mail-logo.png" alt="Mail Normal" width="25" height="22" />
                        </div>
                    </a>
                </div>
            </div>
            <div className="bPage--right" style={rightStyle}>
            </div>
        </div>
    )
}  