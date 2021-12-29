import * as React from "react"
import TimetableLoader from "../components/timetableLoader";
import "../styles/global.scss"

// markup
function IndexPage(props) {
  return (
    <main>
      <title>Timetables</title>
      <TimetableLoader {...props} />
      <small>Data source: <a href="https://www.hsl.fi/en/hsl/open-data">© HSL 2016</a></small>
    </main>
  )
}

export default IndexPage;
