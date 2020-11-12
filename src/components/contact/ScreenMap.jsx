import React from 'react';
import { connect } from 'react-redux';
import { position } from '../../redux/actions/contactActions';

// libraries
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// styled-components
import styled from 'styled-components';

// Styles
import './ScreenMap.css';

const MapCenter = styled(MapContainer)`
  &.leaflet-container {
    width: 100%;
    height: 100vh;
  }
`;


const ScreenMap = ({ coords: { lat, lng }, zoom }) => {

    const position = [lat, lng];

    return (
        <MapCenter
            center={position}
            zoom={zoom}
            className='show'
        >
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
        </MapCenter>
    )

}

const mapStateToProps = (state) => {

    return {
        coords: state.contact.coords,
        zoom: state.contact.zoom

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        position: () => dispatch(position())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScreenMap);
