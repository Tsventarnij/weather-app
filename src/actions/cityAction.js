import axios from "axios";

export function cities(object) {
    return { type: 'GET_CITIES', object}
}

export function getCities() {
    return (dispatch) => {
        axios.get('/city.list.js')
            .then(function (response) {
                dispatch(cities(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}