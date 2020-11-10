import { types } from '../types/types';

const initialState = {
    coords: {
        lat: 28.128081,
        lng: -15.4467406,
    },
    zoom: 13
}

function contact(state = initialState, action) {
    switch (action.type) {
        case types.POSITION:
            return {
                ...state
            }

        default:
            return state
    }
}

export default contact;