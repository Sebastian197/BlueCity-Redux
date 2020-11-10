import React from 'react';
import { connect } from 'react-redux';
import { position } from '../../redux/actions/contactActions';


// Components
import ScreemMap from './ScreemMap';


const Contact = ({ coords: { lat, lng }, zoom }) => {

    const position = [lat, lng];

    return (
        <div>
            <h1>Contact</h1>
            <ScreemMap
                position={position}
                zoom={zoom}
            />
        </div>
    )
};

const mapStateToProps = (state) => {
    console.log(state);
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
)(Contact);
