import React from "react";
import { Link } from 'react-router-dom';

export default function BProjects() {

    // styles
    const pageStyle = {
        fontFamily: 'Calibri, Inter, sans-serif', // Specify calibri as the primary font
    };

    // JSX Code itself
    return (
        <div className="bProjects--style" style={pageStyle}>
            <Link className="bp--return" to="/">Karl Tammehoid</Link>
            <p className="bp--title">All Projects</p>
            <div className="bp--categories">
                <p>Year</p>
                <p>Project</p>
                <p>Built with</p>
                <p>Link</p>
            </div>
        </div>
    )
}