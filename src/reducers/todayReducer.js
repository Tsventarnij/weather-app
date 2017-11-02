
export default function todayReducer(state = {}, action) {

    switch (action.type) {
        case "GET_TODAY":
            return {
                ...state,
                ...action.object
            }

        default:
            return state
    }

}



