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
                <p className="bpc--bw">Built with</p>
                <p className="bpc--link">Link</p>
            </div>
            <div className="bp--projects">
                {bpdata.map((bpd, index) => (
                    <div className="bp--project">
                        <p className="bpd--year">{bpd.year}</p>
                        <p className="bpd--project">{bpd.project}</p>
                        <p className="bpd--bw">{bpd.bw}</p>
                        <a className="bpd--link" href={bpd.link} target="_blank" rel="noopener noreferrer">
                            {bpd.linkText}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}