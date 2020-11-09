const initialState = {
    posts: [],
    isFetching: false,
    error: null
}

function posts(state = initialState, action) {
    switch (action.type) {
        case '':
            return {
                ...state,
                isFetching: true
            }


        default:
            return state
    }
}

export default posts