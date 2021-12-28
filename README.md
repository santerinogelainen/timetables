# Timetables 

Simple [Gatsby](https://www.gatsbyjs.com/) app that displays realtime timetables for HSL/Waltti/Other digitransit supported stops and stations.

Data is fetched from the Digitransit Routing API:
https://digitransit.fi/en/developers/apis/1-routing-api/

## Usage

Call the home page with the correct query string:

1. For bus/tram stops:

```
?stop=<stop-id here>
```

2. For train/metro stations:

```
?station=<station-id here>
```

Ids are in format: FeedId:StationOrStopId
Example: HSL:4000211

## Development

1. Install dependencies:

```
cd app
npm install
```

2. Run in development:

```
npm run develop
```

3. Build for production:

```
npm run build
```

## Why?

For usage in backgrounds, phone widgets etc.
For example I have setup my most used stops and stations as widgets on my IPhone using [Widget Web](https://apps.apple.com/us/app/widget-web/id1522169352).