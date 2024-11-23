import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MapView from './components/map-view/MapView'
import getAllReports from './http-operations/api.js'

function App() {
  const itemsDummy = {
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
  const [data, setData] = useState(itemsDummy);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(()=>{
    const fetchGeoJSON = async ()=>{
      try{
        const response = await getAllReports();
        setData(response.data);
      } catch(err){
        setError(err.message);
      } finally{
        setLoading(false);
      }
    }
    fetchGeoJSON();
  },[]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <h1>OpenLayers Map with GeoJSON Reports - Zika Virus Epedimic</h1>
      <MapView items={data}/>
    </div>
  );
}

export default App;
