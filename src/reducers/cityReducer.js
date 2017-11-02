export default function cityReducer(state = {}, action) {
    switch (action.type) {
        case "GET_CITIES":
            return {
                ...state,
                ...action.object
            }

        default:
            return state
    }

}
