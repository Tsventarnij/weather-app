import React, {Component} from 'react'
import {getWeekWeatherByID} from '../../actions/weekAction'
import {connect} from 'react-redux'
import Buttons from '../Bars/header/Buttons'
import Moment from 'moment'

class Week extends Component {

    componentDidMount() {

        this.props.getWeekWeatherByID(this.props.params.cityID);
    }

    groupWeatherByDay(weather){
        if(!weather) return;
        const time = ["Time", 0,3,6,9,12,15,18,21];
        let newTransform=[];
        let temp="";
        time.map(item => {
            if(typeof(newTransform[item]) === 'undefined'){
                if(typeof(item)==="string") newTransform[item] = [item];
                else newTransform[item] = [item+":00"];
            }

        })


        // for(let i=weather[0].dt; i<=weather[(weather.length-1)].dt; i=i+86400) {
        //     console.log(date(i))
        // }
        weather.forEach((value) => {
            if (temp !== Moment(value.dt_txt).format("DD-MM-YYYY")) {
                temp = Moment(value.dt_txt).format("DD-MM-YYYY")
                newTransform[time[0]].push(temp);
            }

        })
        temp="";
        weather.forEach((value) => {
            if(newTransform[time[0]][newTransform[Moment(value.dt_txt).format("H")].length]!==Moment(value.dt_txt).format("DD-MM-YYYY")) {
                newTransform[Moment(value.dt_txt).format("H")].push(" ");
            }
            newTransform[Moment(value.dt_txt).format("H")].push(value);


        })

        return newTransform;
    }

    render() {


        const w = this.props.weatherWeek;
        const groupedList = this.groupWeatherByDay(w.list);

        return (
            <div>
                <h1>Weather in {w&&w.city&&w.city.name} on week</h1>
                <Buttons city={w&&w.city&&w.city.id} active="week"/>

                <table className="table table-striped">
                    <thead>
                    <tr>
                        {groupedList&&groupedList["Time"].map(item =>
                            <th key={item}>{item}</th>
                        )}
                    </tr>
                    </thead>
                    <tbody>
                    {groupedList && Object.keys(groupedList).map((date, index) =>{
                        if(date==="Time"){
                           return <tr key={date}></tr>;
                        }else {
                            return(
                                <tr key={index}>
                                {groupedList[date].map(item => {
                                    if(typeof(item)==="string") return <td key={item}>{item}</td>
                                    else{
                                        return(
                                            <td key={item.dt_txt}>
                                                <img src={"http://openweathermap.org/img/w/" + item.weather[0].icon+ ".png"} />
                                                <br />{item.main.temp}°C <br />
                                                {item.weather[0].description}
                                            </td>
                                        )
                                    }
                                })}
                                </tr>
                            )
                        }

                    })}
                    </tbody>
                </table>

            </div>

        );
    }
}



function mapStateToProps(state) {

    return {
        weatherWeek: state.week,

    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getWeekWeatherByID: (id) => {
            dispatch(getWeekWeatherByID(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Week)
