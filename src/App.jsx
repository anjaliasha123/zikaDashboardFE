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
        "geometry": {
    "type": "Point",
    "coordinates": [
        -83.2142,
        35.11419
    ]
},
"properties": {
    "country": "United States",
    "phylum": "Chordata",
    "state": "North Carolina",
    "kingdom": "Animalia",
    "class": "Amphibia"
},
"type": "Feature"
},
{
"geometry": {
    "type": "Point",
    "coordinates": [
        -87.73791,
        40.13832
    ]
},
"properties": {
    "country": "United States",
    "phylum": "Chordata",
    "state": "Illinois",
    "kingdom": "Animalia",
    "class": "Amphibia"
},
"type": "Feature"
},
{
"geometry": {
    "type": "Point",
    "coordinates": [
        -82.8982,
        32.0909
    ]
},
"properties": {
    "country": "United States",
    "phylum": "Chordata",
    "state": "Georgia",
    "kingdom": "Animalia",
    "class": "Reptilia"
},
"type": "Feature"
},
    ],
  };
  // const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // useEffect(()=>{
  //   const fetchGeoJSON = async ()=>{
  //     try{
  //       const response = await getAllReports();
  //       setData(response.data);
  //     } catch(err){
  //       setError(err.message);
  //     } finally{
  //       setLoading(false);
  //     }
  //   }
  //   fetchGeoJSON();
  // },[]);
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;
  return (
    <div >
      <h1>OpenLayers Map with GeoJSON Reports - </h1>
      <MapView items={itemsDummy}/>
    </div>
  );
}

export default App;
