import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function BPage({ entries, projects }) {
    /* - - - - - - - - - -- - - - -- - - -*/
    /* - - - - - - - - - -- - - - -- - - -*/
    /* ACTIVE NAVBAR */
    // State to track the active section
    const [activeSection, setActiveSection] = useState("about");

    // Function to update the active section based on scroll position
    const handleScroll = () => {
        const aboutSection = document.querySelector(".bpr--about");
        const experienceSection = document.querySelector(".bpr--experience");
        const projectsSection = document.querySelector(".bpr--projects");

        // Calculate the top offset of each section
        const aboutOffset = aboutSection.offsetTop;
        const experienceOffset = experienceSection.offsetTop;
        const projectsOffset = projectsSection.offsetTop;

        // Get the current scroll position
        const scrollPosition = window.scrollY;

        // Determine the active section based on scroll position
        if (scrollPosition >= aboutOffset && scrollPosition < experienceOffset) {
            setActiveSection("about");
        } else if (scrollPosition >= experienceOffset && scrollPosition < projectsOffset) {
            setActiveSection("experience");
        } else if (scrollPosition >= projectsOffset) {
            setActiveSection("projects");
        }
    };

    // Add scroll event listener when component mounts
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Function to handle navigation clicks
    const handleNavigationClick = (section) => {
        setActiveSection(section);
        if (section === "about") {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const element = document.querySelector(`.bpr--${section}`);
            if (element) {
                const viewportHeight = window.innerHeight;
                const yOffsetPercentage = 0.1; // Adjust this value to set the percentage of viewport height as the offset
                const yOffset = -viewportHeight * yOffsetPercentage;
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }
    }

    /* - - - - - - - - - -- - - - -- - - -*/
    /* - - - - - - - - - -- - - - -- - - -*/

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
                    <p
                        onClick={() => handleNavigationClick("about")}
                        className={activeSection === "about" ? "active" : ""}
                        style={{
                            cursor: "pointer", // Change cursor to pointer
                            position: "relative", // Required for positioning pseudo-element
                            paddingLeft: "5%" // Initial padding for the text
                        }}><span className="navbar-text" style={{ color: activeSection === "about" ? "var(--white)" : "var(--grayish)" }}>ABOUT</span>
                    </p>
                    <p
                        onClick={() => handleNavigationClick("experience")}
                        className={activeSection === "experience" ? "active" : ""}
                        style={{
                            cursor: "pointer", // Change cursor to pointer
                            position: "relative", // Required for positioning pseudo-element
                            paddingLeft: "5%" // Initial padding for the text
                        }}><span className="navbar-text" style={{ color: activeSection === "experience" ? "var(--white)" : "var(--grayish)" }}>EXPERIENCE</span>
                    </p>
                    <p
                        onClick={() => handleNavigationClick("projects")}
                        className={activeSection === "projects" ? "active" : ""}
                        style={{
                            cursor: "pointer", // Change cursor to pointer
                            position: "relative", // Required for positioning pseudo-element
                            paddingLeft: "5%" // Initial padding for the text
                        }}><span className="navbar-text" style={{ color: activeSection === "projects" ? "var(--white)" : "var(--grayish)" }}>PROJECTS</span>
                    </p>
                </div>
                <div className="bpl--images">
                    <a href="https://github.com/kthoid" target="_blank" rel="noreferrer">
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
                <div className="bpr--about" id="bpr--about">
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
                <div className="bpr--experience" id="bpr--experience">
                    {entries.map((entry, index) => (
                        <a href={entry.website} target="_blank" rel="noreferrer" key={index}>
                            <div className="bpr--box" key={index}>
                                <div className="bpr--layout">
                                    <p className="bpr--date">{entry.date}</p>
                                    <div className="bpr--title-wrapper">
                                        <p className="bpr--title">{entry.title}</p>
                                        <div class="brp--img logo">
                                            <img src="./photos/arrows/arrow-ne.png" alt="New tab" class="brp--img normal" width="10" height="10"></img>
                                            <img src="./photos/arrows/arrow-ne-filtered.png" alt="New tab" class="brp--img filtered" width="10" height="10"></img>
                                        </div>
                                    </div>
                                    <p className="bpr--details">{entry.details}</p>
                                    <div className="bpr--skills">
                                        {entry.skills.map((skill, skillIndex) => (
                                            <div className="skill-box" key={skillIndex}>
                                                {skill}
                                            </div>
                                        ))}
                                    </div>  
                                </div>
                            </div>
                        </a>
                    ))}
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer" class="bpre--archive">
                        <div class="bpre--view">View Resume</div>
                        <div class="brpe--img logo">
                            <img src="./photos/arrows/arrow-ne.png" alt="New tab" class="brpe--img normal" width="10" height="10"></img>
                            <img src="./photos/arrows/arrow-ne-filtered.png" alt="New tab" class="brpe--img filtered" width="10" height="10"></img>
                        </div>
                    </a>
                </div>
                <div className="bpr--projects" id="bpr--projects">
                    {projects.map((project, index) => (
                        <a href={project.website} target="_blank" rel="noreferrer" key={index}>
                            <div className="bpr--box" key={project}>
                                <div className="bpr--layout">
                                    <img className="bpr--image" src={project.image} alt="Project" />
                                    <div className="bpr--title-wrapper">
                                        <p className="bpr--title">{project.title}</p>
                                        <div class="brp--img logo">
                                            <img src="./photos/arrows/arrow-ne.png" alt="New tab" class="brp--img normal" width="10" height="10"></img>
                                            <img src="./photos/arrows/arrow-ne-filtered.png" alt="New tab" class="brp--img filtered" width="10" height="10"></img>
                                        </div>
                                    </div>
                                    <p className="bpr--details">{project.details}</p>
                                    <p className="bpr--status">{project.status}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer" class="bprp--archive">
                        <Link className="bprp--view" to="/projects">View Project Archive</Link>
                        <img className="bprp--arrow" src="./photos/arrows/arrow-right.png" alt="arrow right" width="12" height="9"></img>
                    </a>
                </div>
            </div>
        </div>
    )
}  