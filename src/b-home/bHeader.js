import React from "react";

export default function BHeader() {
        const headerStyle = {
                fontFamily: 'Inter, sans-serif', // Specify Inter as the primary font
        };

        return (
            <nav className="bHeader--nav" style={headerStyle}>
            <img src="./photos/BuyMyData.png" alt="Buy My Data logo" className="B-Navbar--logo" width="8%"></img>
            <div className="Bheader--div">
                    <p className="B-Navbar--text">Home</p>
                    <p className="B-Navbar--text">Services</p>
                    <p className="B-Navbar--text B-Navbar--gap">Insights</p> 
                    <a href="/signin" className="B-Navbar--text B-Navbar--login">Login</a>
            </div>
    </nav>
        )
}  