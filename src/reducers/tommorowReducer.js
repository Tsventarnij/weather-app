export default function tommorowReducer(state = {}, action) {
    switch (action.type) {
        case "GET_TOMMOROW":
            return {
                ...state,
                ...action.object
            }

        default:
            return state
    }

}
