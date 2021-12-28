import * as React from "react"
import TimetableLoader from "../components/timetableLoader";
import "../styles/global.scss"

// markup
function IndexPage(props) {
  return (
    <main>
      <title>Timetables</title>
      <TimetableLoader {...props} />
    </main>
  )
}

export default IndexPage;
