import React from "react";
import { Link } from 'react-router-dom';

export default function BProjects({ bpdata }) {

    // styles
    const pageStyle = {
        fontFamily: 'Calibri, Inter, sans-serif', // Specify calibri as the primary font
    };

    // JSX Code itself
    return (
        <div className="bProjects--style" style={pageStyle}>
            <div className="bp--header">
                <img className="bp--arrow" src="./photos/arrows/arrow-left.png" alt="arrow left" width="12" height="9"></img>
                <Link className="bp--return" to="/">Karl Tammehoid</Link>
            </div>
            <p className="bp--title">All Projects</p>
            <div className="bp--categories">
                <p className="bpc--year">Year</p>
                <p className="bpc--project">Project</p>
                <p className="bpc--status">Status</p>
                <p className="bpc--bw">Built with</p>
                <p className="bpc--link">Link</p>
            </div>
            <div className="bp--projects">
                {bpdata.map((bpd, index) => (
                    <div className="bp--project">
                        <p className="bpd--year">{bpd.year}</p>
                        <p className="bpd--project">{bpd.project}</p>
                        <p className="bpd--status">{bpd.status}</p>
                        <div className="bpd--bw">
                            {bpd.bw.map((skill, skillIndex) => (
                                <span key={skillIndex} className="bpdbw--box">
                                    {skill}
                                </span>
                            ))}
                        </div>
                        <div className="bpdl--box">
                            <a className="bpd--link" href={bpd.link} target="_blank" rel="noopener noreferrer">
                            <span className="link-text">{bpd.linkText}</span>
                                <div className="bpd--img">
                                    <img src="./photos/arrows/arrow-ne-gray.png" alt="New tab" className="bpd--img normal" width="10" height="10" />
                                    <img src="./photos/arrows/arrow-ne-filtered.png" alt="New tab" className="bpd--img filtered" width="10" height="10" />
                                </div>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}