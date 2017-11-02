import axios from "axios";

export function week(object) {
    return { type: 'GET_WEEK', object}
}


export function getWeekWeatherByID(cityID) {
    return (dispatch) => {
        axios.get('https://api.openweathermap.org/data/2.5/forecast/', {
            params: {
                id: cityID, //524901, //687700,
                APPID: "6a1d7998d9bdbb85599e66551b0a8c6c",
                units: "metric",
               
            }
        })
            .then(function (response) {
                dispatch(week(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}
/*
https://api.openweathermap.org/data/2.5/forecast/daily&id=524901&APPID=5d2d3b1312ec392e66e7acd5c26937e2&units=metric*/