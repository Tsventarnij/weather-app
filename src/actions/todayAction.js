import axios from "axios";

export function today(object) {
    return { type: 'GET_TODAY', object}
}

export function acceptData(object) {
    return { type: 'ACCEPT_TODAY_DATA', object}
}
//http://api.openweathermap.org/data/2.5/forecast'

export function getTodayWeatherByID(cityID) {
    return (dispatch) => {
        dispatch(acceptData(cityID));
        axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
                id: cityID, //524901, //687700,
                APPID: "6a1d7998d9bdbb85599e66551b0a8c6c",
                units: "metric",

            }
        })
            .then(function (response) {

                dispatch(today(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}