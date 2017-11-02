import Constants from '../constants/Constants'

const defaultState = {

};

export default function appDataReducer(state = defaultState, action) {

    switch (action.type) {
        case Constants.GET_ATTEMPT:
            return {
                ...state,
            };

        case Constants.GET_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}
