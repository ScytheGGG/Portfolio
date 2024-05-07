import React, { useState, useEffect } from 'react';
import '../style.css'; // Import CSS file for styling

function MouseShadow() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="mouse-shadow" style={{ left: mousePosition.x, top: mousePosition.y }} />
    );
}

export default MouseShadow;