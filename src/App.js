import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// website elements
import BPage from "./home/bPage"
import bPageExpData from "./home/bPage-exp-data"
import bPageProjectData from "./home/bPage-project-data"
import MouseTrail from "./home/bPage-mouse"

import BProjects from "./projects/bProjects"

// the app itself
export default function App() {
  return (
    <Router>
      <div>
        <MouseTrail />
        <Routes>
          <Route path="/" element={<BPage 
          entries={bPageExpData} 
          projects={bPageProjectData} />} />
          <Route path="/projects" element={<BProjects />} />
        </Routes>
      </div>
    </Router>
  );
}