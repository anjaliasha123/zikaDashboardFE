import { useEffect, useState, useRef } from "react";
import { Map, View, Overlay } from "ol";
import TileLayer from "ol/layer/Tile";
import GeoJSON from "ol/format/GeoJSON";
import { OSM } from "ol/source";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import { Style, Circle, Fill, Stroke } from "ol/style";
import { fromLonLat } from "ol/proj";
import InfoView from "../InfoView";

function MapView({ items }) {
    const mapRef = useRef(null);
    const [showPopup, setPopup] = useState(false);
    const [selectedProperties, setSelectedProperties] = useState(null);
    const selectedStyle = new Style({
        image: new Circle({
            radius: 9,
            fill: new Fill({ color: "blue" }),
            stroke: new Stroke({ color: "yellow", width: 2 }),
        }),
    });
    const unselectedStyle = new Style({
        image: new Circle({
            radius: 5,
            fill: new Fill({ color: "red" }),
            stroke: new Stroke({ color: "red", width: 1 }),
        }),
    });

    const selectedFeatureRef = useRef(null);
    const handleClose = ()=>{
        setPopup(false);
        setSelectedProperties(null);
        if (selectedFeatureRef.current) {
            selectedFeatureRef.current.setStyle(unselectedStyle);
            selectedFeatureRef.current = null;
        }
    }
    useEffect(() => {
        const reportSource = new VectorSource({
            features: new GeoJSON().readFeatures(items, {
                dataProjection: "EPSG:4326",
                featureProjection: "EPSG:3857",
            })
        });
        const reportLayer = new VectorLayer({
            source: reportSource,
            style: unselectedStyle,
        });
        const map = new Map({
            target: mapRef.current,
            layers: [
                new TileLayer({ source: new OSM() }),
                reportLayer
            ],
            view: new View({
                center: fromLonLat([-62.668875, -10.626234]),
                zoom: 2
            }),
        });
        
        // Handle feature click event
        map.on("click", (evt) => {
            let clickedFeature = map.forEachFeatureAtPixel(evt.pixel, (feature) => feature);
            if (clickedFeature) {
                const coordinates = clickedFeature.getGeometry().getCoordinates();
                const properties = clickedFeature.getProperties();
                if (selectedFeatureRef.current && clickedFeature === selectedFeatureRef.current) {
                    handleClose();
                }else {
                    if (selectedFeatureRef.current) {
                        selectedFeatureRef.current.setStyle(unselectedStyle);
                    }
                    clickedFeature.setStyle(selectedStyle);
                    selectedFeatureRef.current = clickedFeature;
                    setPopup(true);
                    setSelectedProperties(properties);
                }
            }else{
                handleClose();
            }
        });
        return () => { map.setTarget(null);  };
    }, [items]);

    return (
        <div>
            <div id="map" ref={mapRef}></div>
            {showPopup && <InfoView properties={selectedProperties} onClose={handleClose}/>}
            {selectedFeatureRef.current && <div>{selectedFeatureRef.current.getGeometry().getCoordinates()}</div>}
        </div>
    )
}
export default MapView;