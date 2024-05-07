import React from "react";

export default function BPage({ entries, projects }) {
    const pageStyle = {
        fontFamily: 'Calibri, Inter, sans-serif', // Specify calibri as the primary font
        display: 'flex',
        position: 'relative',
    };

    const leftStyle = {
        position: 'sticky',
        top: 'calc(15% + 20px)', // Adjusted top position to account for the margin and padding
        height: 'calc(100vh - 7%)',
        boxSizing: 'border-box', // Include padding in the width calculation
    };

    const rightStyle = {
        width: '48%',
        overflowY: 'auto', // Enable vertical scrolling if content overflows
    };

    return (
        <div className="bPage--style" style={pageStyle}>
            <div class="mouse-trail"></div>
            <div className="bPage--left" style={leftStyle}>
                <p className="bpl--who">Karl Tammehoid</p>
                <p className="bpl--what">Software Development Student</p>
                <p className="bpl--why">I build immersive and user-friendly experiences,
                focused on creativity and functionality.</p>
                <div className="bpl--nav">
                    <p>ABOUT</p>
                    <p>EXPERIENCE</p>
                    <p>PROJECTS</p>
                </div>
                <div className="bpl--images">
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
                <div className="bpr--about">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                    qui officia deserunt mollit anim id est laborum.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                    qui officia deserunt mollit anim id est laborum.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                    qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="bpr--experience">
                    {entries.map((entry, index) => (
                        <a href={entry.website} target="_blank" rel="noreferrer" key={index}>
                            <div className="bpr--box" key={index}>
                                <div className="bpr--layout">
                                    <p className="bpr--date">{entry.date}</p>
                                    <p className="bpr--title">{entry.title}</p>
                                    <p className="bpr--details">{entry.details}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer" className="bpre--view">View Résumé</a>
                </div>
                <div className="bpr--projects">
                    {projects.map((project, index) => (
                        <a href={project.website} target="_blank" rel="noreferrer" key={index}>
                            <div className="bpr--box" key={project}>
                                <div className="bpr--layout">
                                    <img className="bpr--image" src={project.image} alt="Project" />
                                    <p className="bpr--title">{project.title}</p>
                                    <p className="bpr--details">{project.details}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer" className="bprp--view">View Project Archive</a>
                </div>
            </div>
        </div>
    )
}  