import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MapView from './components/map-view/MapView'

function App() {
  const items = {
    type: "FeatureCollection",
    features: [
      {
        geometry: {
          type: "Point",
          coordinates: [-62.668875, -10.626234], // Brazil-Rondonia
        },
        properties: {
          dataField: "zika_reported",
          unit: "cases",
          reportedDate: "2016-04-02",
          timePeriod: "NA",
          locationType: "state",
          location: "Brazil-Rondonia",
          dataFieldCode: "BR0011",
          timePeriodType: "NA",
          value: "618",
        },
        type: "Feature",
      },
      {
        geometry: {
          type: "Point",
          coordinates: [-70.208121, -8.385155], // Brazil-Acre
        },
        properties: {
          dataField: "zika_reported",
          unit: "cases",
          reportedDate: "2016-04-02",
          timePeriod: "NA",
          locationType: "state",
          location: "Brazil-Acre",
          dataFieldCode: "BR0011",
          timePeriodType: "NA",
          value: "375",
        },
        type: "Feature",
      },
    ],
  };

  return (
    <div className="App" style={{ width: "100%", height: "100%" }}>
      <h1>OpenLayers Map with GeoJSON Reports - Zika Virus Epedimic</h1>
      <MapView items={items}/>
    </div>
  );
}

export default App;
