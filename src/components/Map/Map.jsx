import React from 'react';
import {MapContainer, TileLayer, Marker, Popup, useMap} from 'react-leaflet'
import useStyles from './styles.js'

//TODO: Find out where and how to incorporate Leaflet's 'flyTo' method


/*Except for its children, MapContainer props are immutable: changing them after they have been set a first time will
have no effect on the Map instance or its container. This function allow you to update the center and zoom via a child
component
 */
function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}

const Map = ({latLng, center, zoom}) => {

    const classes = useStyles();
    return (
        //The 'whenCreated' prop sets the map instance to the value Lmap
        <MapContainer className={classes.leafletContainer}  center={center} zoom={zoom}>
            <ChangeView center={[latLng.lat, latLng.lng]} zoom={11}/>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[ latLng.lat, latLng.lng]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;
