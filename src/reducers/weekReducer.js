export default function weekReducer(state = {}, action) {
    switch (action.type) {
        case "GET_WEEK":
            return {
                ...state,
                ...action.object
            }

        default:
            return state
    }

}
