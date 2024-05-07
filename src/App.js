import React from "react"

// website elements
import BPage from "./b-home/bPage"
import bPageExpData from "./b-home/bPage-exp-data"
import bPageProjectData from "./b-home/bPage-project-data"
import MouseTrail from "./b-home/bPage-mouse"

// the app itself
export default function App() {
  return (
    <div>
      <MouseTrail />
      <BPage 
        entries={bPageExpData}
        projects={bPageProjectData}
      />
    </div>
  )
}