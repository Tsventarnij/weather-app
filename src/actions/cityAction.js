import axios from "axios";

export function cities(object) {
    return { type: 'GET_CITIES', object}
}

export function getCities() {
    return (dispatch) => {
        axios.get('/city.list.js')
            .then(function (response) {
                //response.data[1].temp=23;

                    // response.data.forEach(item=>{
                    //
                    //     axios.get('https://api.openweathermap.org/data/2.5/weather', {
                    //         params: {
                    //             id: item.value, //524901, //687700,
                    //             APPID: "6a1d7998d9bdbb85599e66551b0a8c6c",
                    //             units: "metric",
                    //
                    //         }
                    //     })
                    //         .then(function (response) {
                    //             item.name = item.label;
                    //             item.temp = response.data.main.temp;
                    //             item.label = item.label+" "+item.temp+"°C";
                    //         })
                    //         .catch(function (error) {
                    //             console.log(error);
                    //         });
                    // })

                response.data.forEach(item=>{
                    item.name = item.label;
                    item.temp = Math.round(Math.random()*5000)/100-25;
                    item.label = item.name+" "+item.temp+"°C";

                })
                dispatch(cities(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}