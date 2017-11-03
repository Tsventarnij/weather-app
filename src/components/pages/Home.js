import React, {Component} from 'react'
import {getCities} from '../../actions/cityAction'
import {connect} from 'react-redux'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {browserHistory} from 'react-router';
import ChartBar from './ChartBar'


class Home extends Component {

    componentDidMount() {
        this.props.getCities();
    }

    updateValue (city) {

       browserHistory.push('/'+city.value+'/today');
    }



    render() {
        let obj=this.props.city;
        let arr =[]
        if(obj) {
            arr = Object.keys(obj).map(function (key) {
                return obj[key];
            });
        }
        let arrLabel=[];
        let arrData=[];

        if(true) {
            arr.forEach(item => {

                arrLabel.push(item.name);
                arrData.push(item.temp);

            })
        }

            return (
            <div>
                <h1 >Home of the weather app</h1>


                <Select
                    id="state-select"
                    ref="stateSelect"

                    options={arr}

                    name="selected-state"


                    onChange={this.updateValue}

                />

                <ChartBar label={arrLabel} data={arrData}/>

            </div>
        );
    }
}
function mapStateToProps(state) {

    return {
        city: state.cities,

    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCities: () => {
            dispatch(getCities());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)
