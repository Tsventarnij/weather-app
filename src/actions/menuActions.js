import Constants from '../constants/Constants'

export function toggleEmbeddedMenu(payload) {
    return {
        type: Constants.EMBEDDED_MENU_TOGGLE,
        payload: payload
    }
}