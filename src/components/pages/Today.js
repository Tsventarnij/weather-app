import React, {Component} from 'react'
import {getTodayWeatherByID} from '../../actions/todayAction'
import {getWeekWeatherByID} from '../../actions/weekAction'
import {connect} from 'react-redux'
import Buttons from '../Bars/header/Buttons'
import Moment from 'moment'
import SimpleMap from './SimpleMap'
import styled from 'styled-components'

class Today extends Component {

    componentWillMount() {

        this.props.getTodayWeatherByID(this.props.params.cityID);
        this.props.getWeekWeatherByID(this.props.params.cityID);
    }

    shouldComponentUpdate(nextProps){

        if(nextProps.params.cityID!==this.props.params.cityID) {

            this.props.getTodayWeatherByID(nextProps.params.cityID);
            this.props.getWeekWeatherByID(this.props.params.cityID);
            this.forceUpdate()
            return true;
        }
        return true;

    }

    render() {
        const w=this.props.weatherToday;
        const today= new Date();
        const iconName = w && w.weather && w.weather[0].icon;
        const icon = "http://openweathermap.org/img/w/" + iconName + ".png";
        const temp = w && w.main && w.main.temp;
        const city = w && w.name;
        const description =w && w.weather && w.weather[0].description;
        const press=w && w.main && w.main.pressure;
        const humi=w && w.main && w.main.humidity;
        const wind=w && w.wind && w.wind.speed;
        let lon = w && w.coord && w.coord.lon;
        let lat = w && w.coord && w.coord.lat;
        let simplemap = <SimpleMap lat={lat} lng={lon}/>
        if(typeof(lat) !== 'number') {
            simplemap = " "
        }

        const ww=this.props.weatherWeek;


        return (
            <div>
                <h1>Weather in {city}</h1>
                <Buttons active="today" city={w && w.id}/>
                <div className="row">
                    <div className="col-sm-4">
                        <h2><img src={icon} /> {temp} °C</h2>
                        <h3>{description}</h3>
                        <table className="table table-striped">
                            <tbody>
                            <tr>
                                <td>Wind speed</td>
                                <td>{wind} m/s</td>
                            </tr>
                            <tr>
                                <td>Pressure</td>
                                <td>{press} hpa</td>
                            </tr>
                            <tr>
                                <td>Humidity</td>
                                <td>{humi} %</td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                    <div className="col-sm-8">
                        <table className="table table-striped">
                            <tbody>
                            {ww&&ww.list&&ww.list.map(item => {

                                if(Moment(item.dt_txt).format("D")===String(today.getDate())){
                                    return(
                                    <tr key={item.dt_txt}>
                                        <td>{Moment(item.dt_txt).format("HH:mm")}</td>
                                        <td><img src={"http://openweathermap.org/img/w/" + item.weather[0].icon + ".png"}/>
                                        </td>
                                        <td>{item.main.temp}°C</td>
                                        <td>{item.weather[0].description}</td>
                                    </tr>
                                )}}
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                         {simplemap}

                    </div>
                </div>
            </div>

        );
    }
}



function mapStateToProps(state) {

    return {
        weatherToday: state.today,
        weatherWeek: state.week

    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTodayWeatherByID: (id) => {
            dispatch(getTodayWeatherByID(id));
        },
        getWeekWeatherByID: (id) => {
            dispatch(getWeekWeatherByID(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Today)

