import React, {Component} from 'react'
import {getTommorowWeatherByID} from '../../actions/TommorowAction'
import {connect} from 'react-redux'
import Buttons from '../Bars/header/Buttons'
import Moment from 'moment'

class Tommorow extends Component {

    componentWillMount() {

        this.props.getTommorowWeatherByID(this.props.params.cityID);
    }

    render() {

        const w = this.props.weatherTommorow;
        return (
            <div>
                <h1>Weather in {w&&w.city&&w.city.name} on {Moment(w&&w.list&&w.list[0].dt_txt).format('D MMMM')}</h1>
                <Buttons city={w&&w.city&&w.city.id} active="tommorow"/>
                <table className="table">
                    <thead>
                    <tr><th>Time</th>
                        <th> </th>
                        <th>Temperature</th>
                        <th>Description</th>
                        <th>Wind speed</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                    </thead>
                    <tbody>
                {w&&w.list&&w.list.map(item =>
                    <tr key={item.dt_txt}>
                        <td>{Moment(item.dt_txt).format('HH:mm')}</td>
                        <td><img src={"http://openweathermap.org/img/w/" + item.weather[0].icon+ ".png"} /></td>
                        <td> {item.main.temp} °C </td>
                        <td> {item.weather[0].description} </td>
                        <td> {item.wind.speed} m/s</td>
                        <td> {item.main.pressure} hpa</td>
                        <td> {item.main.humidity} %</td>
                    </tr>

                )}</tbody>
                </table>

            </div>

        );
    }
}



function mapStateToProps(state) {

    return {
        weatherTommorow: state.tommorow,

    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTommorowWeatherByID: (id) => {
            dispatch(getTommorowWeatherByID(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tommorow)
