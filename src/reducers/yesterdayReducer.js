export default function yesterdayReducer(state = {}, action) {
    switch (action.type) {
        case "GET_YESTERDAY":
            return {
                ...state,
                ...action.object
            }

        default:
            return state
    }

}
