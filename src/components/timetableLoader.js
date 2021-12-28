

import axios from "axios"
import queryString from "query-string"
import Timetable from "./timetable";
import React from "react";

const defaultDeparturesAmount = 30;

const getInnerGraphQL = (departures) => `{
    name,
    vehicleType,
    desc,
    code,
    stoptimesWithoutPatterns(numberOfDepartures:${departures}) {
      scheduledArrival
      scheduledDeparture
      realtime
      realtimeArrival
      realtimeDeparture
      arrivalDelay
      departureDelay
      serviceDay,
      headsign,
      trip {
        routeShortName,
        }
    }
  }` 

async function getDigitransitData(prefix) {
    const url = "https://api.digitransit.fi/routing/v1/routers/finland/index/graphql";
    const data = `{${prefix} ${getInnerGraphQL(defaultDeparturesAmount)}}`;
    return await axios.post(url, data, {
      headers: {
        'Content-Type': "application/graphql"
      }
    });
}

async function getStop(id) {
    return await getDigitransitData(`stop(id: "${id}")`);
}

async function getStation(id) {
    return await getDigitransitData(`station(id: "${id}")`);
}

function TimetableLoader(props) {

    const [response, setResponse] = React.useState();
    const [error, setError] = React.useState();
  
    React.useEffect(() => {
  
      if (!props.location.search) {
        return;
      }
  
      if (response || error) {
        return;
      }
  
      const query = queryString.parse(props.location.search);
  
      if (query.stop) {
        const awaitData = async () => {
          const response = await getStop(query.stop);
          setResponse(response.data);
        };
  
        awaitData().catch(setError);
      }
      
      if (query.station) {
        const awaitData = async () => {
          const response = await getStation(query.station);
          setResponse(response.data);
        };
  
        awaitData().catch(setError);
      }
  
    }, [props.location.search, response, error]);
  
    if (response?.data) {
      return <Timetable data={response.data}/>;
    }
  
    return <h1>No data found.</h1>;
}

export default TimetableLoader;