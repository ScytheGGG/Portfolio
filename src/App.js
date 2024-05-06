import React from "react"

// website elements
import BPage from "./b-home/bPage"
import bPage_exp from "./b-home/bPage-exp-data"

// the app itself
export default function App() {
  return (
    <div>
      <BPage entries={bPage_exp} />
    </div>
  )
}