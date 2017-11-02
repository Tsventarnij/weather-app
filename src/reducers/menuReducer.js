import Constants from '../constants/Constants'

const defaultState = {
    embeddedMenuOpened: false,
};

export default function menuReducer(state = defaultState, action) {

    switch (action.type) {
        case Constants.EMBEDDED_MENU_TOGGLE:
            return {
                ...state,
                embeddedMenuOpened: action.payload
            };

        default:
            return state;
    }
}