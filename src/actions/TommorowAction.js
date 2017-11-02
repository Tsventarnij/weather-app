import axios from "axios";

export function tommorow(object) {
    return { type: 'GET_TOMMOROW', object}
}

//http://api.openweathermap.org/data/2.5/forecast'

export function getTommorowWeatherByID(cityID) {
    return (dispatch) => {
        axios.get('https://api.openweathermap.org/data/2.5/forecast', {
            params: {
                id: cityID, //524901, //687700,
                APPID: "6a1d7998d9bdbb85599e66551b0a8c6c",
                units: "metric",
                lang: "RU"
            }
        })
            .then(function (response) {

                let list=response.data.list.filter(item=>{
                    let time = new Date(item.dt_txt);
                    let now = new Date();
                    now.setDate(now.getDate()+1);
                    if(time.getDate()===now.getDate()) {
                        return true;
                    }else{
                        return false;
                    }
                });
                let item = {
                    city: response.data.city,
                    list: list
                }

                dispatch(tommorow(item));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}


