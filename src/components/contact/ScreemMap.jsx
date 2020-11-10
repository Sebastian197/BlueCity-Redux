import React from 'react';

// libraries
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import styled from 'styled-components';

// Styles
const MyMap = styled(MapContainer)`
  &.leaflet-container {
    width: 50%;
    height: 50vh;
    position: absolute;
    left: 25%;
    top: 25%;
  }
`;


const ScreemMap = ({ position, zoom }) => {

    return (
        <MyMap center={position} zoom={zoom}>
            <TileLayer
                attribution=''
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    IES El Rincón<br />
                    Guanarteme Building<br />
                    My school.<br />
                    I miss it so much.
                </Popup>
            </Marker>
        </MyMap>
    )

}

export default ScreemMap;