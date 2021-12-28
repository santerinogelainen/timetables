import moment from "moment"
import React from "react";

function Timetable(props) {

    const data = props.data.stop ?? props.data.station;
    let name = data.name;

    if (data.code) {
      name = data.code + " " + name;
    }
  
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th colSpan={3}>
                {name}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.stoptimesWithoutPatterns.map(row => <TimetableRow {...row} />)}
          </tbody>
        </table>
      </div>
    )
}

function TimetableRow(props) {

    const departure = moment.unix(props.realtimeDeparture + props.serviceDay);
    
    return (
        <tr key={props.id}>
            <td className="td-auto">{departure.format("HH:mm")}</td>
            <td className="td-auto">{props.trip.routeShortName}</td>
            <td>{props.headsign}</td>
        </tr>
    );
}

export default Timetable;