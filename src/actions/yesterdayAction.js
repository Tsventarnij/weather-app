import axios from "axios";

export function yesterday(object) {
    return { type: 'GET_YESTERDAY', object}
}

//http://history.openweathermap.org/data/2.5/history/city?id=2885679&type=hour

export function getYesterdayWeatherByID(cityID) {
    return (dispatch) => {
        axios.get('http://history.openweathermap.org/data/2.5/history/city', {
            params: {
                id: cityID, //524901, //687700,
                APPID: "6a1d7998d9bdbb85599e66551b0a8c6c",
                units: "metric",
                type: "hour",
                lang: "RU"
            }
        })
            .then(function (response) {

                dispatch(yesterday(response));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}


